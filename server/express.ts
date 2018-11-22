import * as express from 'express';
import * as cors from 'cors';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as handlers from './handlers';
import { initDatabase } from './db';
import { loginHandler, initAuthentication, logoutHandler } from './auth';
import * as passport from 'passport';

async function main() {
  const app = express();

  app.use(bodyParser.json());

  // CORS
  app.use(
    cors({
      origin: 'http://localhost:8080',
      credentials: true
    })
  );

  // Session
  app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false
    })
  );

  // Static files
  // Uncomment this if you want to serve the built PROD version of the client from '/dist' with express as well
  // app.use(express.static('./dist'));

  // Database
  await initDatabase();

  // Authentication
  initAuthentication(app);
  app.post('/login', [passport.authenticate('local'), loginHandler]);
  app.get('/logout', logoutHandler);

  // Routes
  app.get('/posts', handlers.getPosts);
  app.post('/posts', handlers.newPost);
  app.delete('/posts/:id', handlers.deletePost);

  // HTTP
  app.listen(3000, () => {
    console.log('Express server listening on http://localhost:3000');
  });
}

main();
