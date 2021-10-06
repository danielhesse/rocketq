/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import path from 'path';
import { open } from 'sqlite';
import { Database as DatabaseSQLite } from 'sqlite3';

export function Database() {
  return open({
    filename: path.resolve(__dirname, 'rocketq.sqlite'),
    driver: DatabaseSQLite,
  });
}
