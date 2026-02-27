import type { ReactNode } from 'react'
import websocketDiagram from '../assets/blog_posts/websockets/WebSocket_Diagram.png'

export interface BlogPost {
  id: number
  title: string
  content: ReactNode
  author: string
  datePosted: string
  image?: string
  imagePlaceholderGradient?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'A Case for Bot Integration with Backend',
    author: 'Nathan Coelho',
    datePosted: 'January 2026',
    imagePlaceholderGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    content: (
      <>
        <p>
          Playing against our bot in our Catan Online app was a key feature of our MVP. However at the start of our design process, it was not clear how we would implement it in the app as we hadn't yet figured out the communication protocol between front and backend.<br/><br/>

          This article documents our team's collaborative discussions and ultimate decision on how to implement bots in our app.
        </p>

        <p>
          <h2>Implement the Bot as another Client?</h2>
          Up until this point, we'd been working towards the assumption that we would treat the bot like a regular human player.

          My understanding of our thinking so far is that would be easy for bots to simply speak to the backend like any other React app client would, thus simplifying the backend. The planned implementation so far that Yianni has been working on is a custom React hook that is activated when it's the bots turn using the same JSON communication contract that has been established.<br/><br/>

          Building out the networking aspects of this app has revealed a couple issues with this approach:
        </p>
        <ol>
          <li>
                      <p>Each websocket connection is tied to a player ID. A frontend bot would need to either share an existing player's connection or open its own on the same browser — neither is ideal. More critically, if a player disconnects, any bots sharing that connection drop too, and reconnection logic becomes significantly more complex.</p>
          </li>
          <li>
            <p>The JSON contract would need to be refactored to include the target player ID, a bot/human flag, and separate data payloads for each — since bots don't need UI modals, and humans don't need a full list of legal moves upfront. This is essentially defining two separate contracts.</p>
          </li>
          <li>
            <p>Running the bot's decision logic in the browser isn't scalable — it consumes client resources and limits how computationally intensive the bot can become. A workaround is having the frontend request the server to run the logic, but at that point, we might as well just run the bot server-side.</p>
          </li>
        </ol>

        <h2>Running the Bot Server-Side</h2>
        <p>Putting the bot on the server on the other hand is a lot more straight forward:</p>
        <ul>
          <li>It has immediate access to game state.</li>
          <li>It can take actions to modify gamestate directly without requesting it via the websocket JSON infrastructure. This removes a lot of extra code.</li>
          <li>It can still send game state updates to all clients via the websocket connections.</li>
          <li>It utilises server resources.</li>
          <li>It removes the potential for the bot to disconnect along with a player.</li>
          <li>It significantly simplifies the networking architecture.</li>
        </ul>

        <h2>The Decision</h2>
        <p>It's going to save us a lot of time and effort to refactor Yianni's existing work to implement the bot in the backend. It completely bypasses the need for it to communicate via the websocket endpoint as it can access and modify game state (all the python objects) directly.</p>
        <p>After taking an action, it can simply ask the backend to broadcast updated game state to all players using the lobby <code>send_gamestate</code> method. Much more simple.</p>
        <p>I think this is a lot easier for you to implement as well, because you can just work purely in Python. It will also be a lot easier to refactor your Typescript implementation into Python, than it will be to overhaul most of the networking infrastructure.</p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Migrating a Project to Typescript',
    author: 'Nathan Coelho',
    datePosted: 'December 2025',
    imagePlaceholderGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    content: (
      <>
        <p>When I first started developing React apps, I was aware of Typescript and that it was widely used in industry. However it was not initially clear to me what exactly was so useful about it, especially if it just transpiles to JavaScript.</p>

        <p>As I gained more experience and began collaborating with other developers, the need for type safety started to become apparent.</p>

        <p>Components were no longer immediately clear what they returned or took as arguments, especially when it was written earlier in the project or by a team mate. It could always be determined by simply refamiliarising ourselves with the code, but this was clearly inefficient and was beginning to create more bugs than we were comfortable with.</p>

        <p>As the project was growing in complexity, these issues would only compound as progress was made. So a decision at approximately 60% complete progress was made to undertake a TypeScript migration.</p>

        <p>This was an initially daunting task as I'd never used it before. However, after the intial configuration changes it became immediately obvious that catching type issues at the development stage was going to save us a lot of time.</p>

        <p>Unexpectedly, I found it extremely valuable for my own learning as it began to flag type issues in my own code. This allowed me to understand the importance of having a clear idea of exactly what types I was working with and improve my code quality.</p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Building Real-Time Features with WebSockets',
    author: 'Nathan Coelho',
    datePosted: 'November 2025',
    imagePlaceholderGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    content: (
      <>
        <p>
          When designing the our Catan Online web app, it became apparent that a crucial part of the user experience was going to be real-time updates of other player's game actions. WebSocket protocol is a natural choice for this.<br/><br/>

          As such, the below article documents our design decision and how it was implemented.
        </p>

        <p>
          <span className='bold'>HTTP Protocol</span><br/>
          Standard HTTP methods (Get, Post, Put, Delete) are a different protocol to Websocket Protocol. Standard HTTP is uni-directional, meaning the Client (frontend) can only reach out to the Server (backend) and receive a response. Communication must always be Client initiated in this protocol.

          In this case, all Clients would need to constantly send requests the server to see if there has been any updates from other Clients.
        </p>

        <p>
          <span className='bold'>WebSocket Protocol</span><br/>
          WebSocket Protocol solves this by allowing efficient bi-directional communication.

          First a connection is established, often called a handshake. Each side then actively listens for "frames" (a package of data) from the other on that connection. Either side can then send/receive frames whenever they want.
        </p>

        <p>
          <span className='bold'>Relevance to Our App</span><br/>
          WebSockets enable the behavior we're looking for - 1 client can update the server, and then the server can immediately update the game state on all connections.

          See diagram explaining how our Websockets will work.

          Instead of creating multiple API endpoints, all Clients establish a connection with a single WebSocket API end point. A separate connection is required to connect to a different endpoint.

          In the JSON, we create an attribute called "action type" that the backend can use to know what it needs to do with the rest of the data that's been sent. Vice Versa for frontend.

          This basically boils down to a bunch of IF statements that evaluate the "action type". That could include - connect, move robber, roll dice, build road...etc.
        </p>

        <img src={websocketDiagram} alt='WebSockets Diagram'/>
      </>
    ),
  },
]
