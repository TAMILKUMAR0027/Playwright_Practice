import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync'
export interface registerData{
    firstname:string,
    lastname:string,
    mobile:number,
    email:string,
    password:string,
    retype:string
};
export function readCSV(): registerData[]{
    const filepath=path.resolve(__dirname,'../test-data/registerdata.csv');
    const fileContent=fs.readFileSync(filepath,'utf-8');
    return parse(fileContent,{
        columns:true,
        skip_empty_lines:true,
        trim:true
    })as registerData[];
}