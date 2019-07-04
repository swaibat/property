import { Client } from 'pg';
import dotenv from 'dotenv'

dotenv.config()


const client = new Client({
    user: 'tydhhzlzbbeagi',
    database: 'df1qi1sq8m3mjm',
    password: process.env.Password,
});

client.connect()


export default client;
