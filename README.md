# Video
LINK : https://drive.google.com/file/d/1_mz4K1nAwFM8hTKcJUAjiYj8JNeW0kMT/view?usp=sharing
# Run
### Front-end
- cd front-end
- npm i && npm run dev

### Back-end
- cd server
- npm i && node server.js

# Frontend 

 - Handle websocket authÏ
 - Handle Websocket error and retry connections
 - Move Count websocket events for another hook and let useWebsocket just for common events
 - Handle the connection status to avoid emit something when the socket is not connected.
 - Create some handler to save the receive data from websocket and save in the zustand

# Backend
- Handle Auth in the websocket
-  avoid emit to all connected users, create groups so we can be more fast.
-  Add Typescript
-  Organize better the files so we can handle Websocket things outside app.



