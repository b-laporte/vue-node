import * as lowdb from 'lowdb';
import * as FileASync from 'lowdb/adapters/FileASync';
import { LowdbAsync } from 'lowdb';

export interface Schema {
  users: User[];
  posts: Post[];
}

export interface User {
  username: string;
  password: string;
}

export interface Post {
  id: string;
  date: Date;
  text: string;
}

const INITIAL_STATE: Schema = {
  posts: [],
  users: []
};

const DB_FILE = 'db/db.json';

export async function getDatabase(): Promise<LowdbAsync<Schema>> {
  const adapter = new FileASync(DB_FILE);
  return await lowdb(adapter);
}

export async function initDatabase() {
  const db = await getDatabase();
  await db.defaults(INITIAL_STATE).write();
  console.log(`Database is using '${DB_FILE}'`);
}
