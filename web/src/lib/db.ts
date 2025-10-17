import { drizzle } from 'drizzle-orm';
import { Client } from '@libsql/client';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Connect to LibSQL
const client = new Client({
  url: 'https://<YOUR-LIBSQL-URL>.libsql.app/<DB_NAME>',
  authToken: '<YOUR-TOKEN>',
});

export const db = drizzle(client);

// Define a table
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
  email: text('email').notNull(),
});
