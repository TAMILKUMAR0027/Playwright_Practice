import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
export interface LoginUser {
    type: string;
    username: string;
    password: string;
}
export function readLoginData(): LoginUser[] {
    const filepath = path.resolve(__dirname, '../test-data/loginData.csv');
    const filecontent = fs.readFileSync(filepath, 'utf-8');
    return parse(filecontent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    }) as LoginUser[];
}