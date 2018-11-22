# VueJS + Node + Typescript

## Project setup

Make sure you have Node 8 or 10 installed on your machine. Clone project and run 

```
npm install
```

## Commands

- `npm run client` - starts the VueJS cli dev server on http://localhost:8080
- `npm run server` - starts the Express server on http://localhost:3000
- `npm run build` - builds production version of VueJS app into `./dist` folder
- `npm run test:client` - runs unit tests for the client part
- `npm run test:server` - runs unit tests for the server part


## Resources

Both client and server are written in [Typescript](https://www.typescriptlang.org). Here are some links to tech used in this setup:

Backend
- [lowdb](https://github.com/typicode/lowdb) - small JSON database for Node
- [express](https://expressjs.com) - most popular Node web app framework
- [passport](https://www.passportjs.org) - user authentication middleware for Node

Frontend
- [VueJS](https://vuejs.org) - frontend framework
- [VueJS CLI](https://cli.vuejs.org) - command line interface for Vue
- [Bootstrap](https://getbootstrap.com) - responsive mobile-first CSS framework 
- [Vue Bootstrap](https://bootstrap-vue.js.org) - bootstrap components for Vue 

Frontend is using standard [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for communicating with server.
An alternative would be using something like [axios](https://github.com/axios/axios)

## Structure

Backend
- `./db/db.json` - JSON file with database contents
- `./server/express.ts` - startup and setup of the Express server (we use cookies, session, CORS and routing)
- `./server/db.ts` - database connection and schema
- `./server/auth.ts` - setup of the Passport authentication for Express
- `./server/handlers.ts` - HTTP request handlers for Express
- `./server/unit/*` - Jest unit tests for the server code

Frontend
- `./src/*` - client-side VueJS application sources 
- `./public/*` - static assets for client application 
- `./tests/unit/*` - Jest unit tests for client code 

## Other
- See [Configuration Reference](https://cli.vuejs.org/config/) for VueJS CLI if necessary
