import { Client } from 'pg';
import dotenv from 'dotenv'

dotenv.config()


const client = new Client({
    user: process.env.user,
    database: process.env.Database,
    password: process.env.Password,
});

client.connect()


export default client;
