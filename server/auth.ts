import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { getDatabase, User } from './db';
import { Express, Request, Response } from 'express';
import 'express-session';
import * as md5 from 'md5';

export function initAuthentication(app: Express) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    'local',
    new LocalStrategy(async (username, password, done) => {
      const db = await getDatabase();
      const user = db
        .get('users')
        .find({ username })
        .value();

      if (!user) {
        return done(`User not found`);
      }
      if (user.password !== md5(password + 'secret')) {
        return done(`Password doesn't match`);
      }

      return done(null, user);
    })
  );

  passport.serializeUser((user: User, done) => {
    done(null, user.username);
  });

  passport.deserializeUser(async (username, done) => {
    const db = await getDatabase();
    const user = db
      .get('users')
      .find({ username })
      .value();
    done(null, user);
  });
}

export function loginHandler(req: Request, res: Response) {
  console.log(`Logged in as ${req.user.username}`);
  res.send({ ...req.user, password: undefined });
}

export function logoutHandler(req: Request, res: Response) {
  req.logout();
  console.log(`Logged out`);
  res.sendStatus(200);
}
