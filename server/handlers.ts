import 'express-session';
import 'passport';
import { getDatabase, Post } from './db';
import { Request, Response } from 'express';
import { v4 } from 'uuid';

export async function getPosts(req: Request, res: Response) {
  console.log(`Loading posts`);

  const db = await getDatabase();
  const messages = await db.get('posts').value();
  res.send(messages);
}

export async function newPost(req: Request, res: Response) {
  console.log(
    `Creating new post, user authenticated: ${req.isAuthenticated()}'`
  );

  if (!req.isAuthenticated()) {
    res.sendStatus(401);
  } else {
    const db = await getDatabase();
    const id = v4();
    const date = Date.now().toString();
    const message = await db
      .get('posts')
      .push({ id, date, ...req.body })
      .last()
      .write();
    res.send(message);
  }
}

export async function deletePost(req: Request, res: Response) {
  console.log(`Deleting a post, user authenticated: ${req.isAuthenticated()}'`);

  if (!req.isAuthenticated()) {
    res.sendStatus(401);
  } else {
    const { id } = req.params;
    const db = await getDatabase();
    const removed = await db
      .get('posts')
      .remove((m: Post) => m.id === id)
      .write();
    res.send(removed);
  }
}
