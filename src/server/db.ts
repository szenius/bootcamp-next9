import 'reflect-metadata';
import { config } from 'dotenv';
import { createConnection } from 'typeorm';

import { User } from './models/user/entity';

config();

console.log('############################# DB_HOST', process.env.DB_HOST);
console.log('############################# DB_USERNAME', process.env.DB_USERNAME);
console.log('############################# DB_PASSWORD', process.env.DB_PASSWORD);
console.log('############################# DB', process.env.DB);
console.log('############################# DB_PORT', process.env.DB_PORT);

const connectDB = createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    port: parseInt(process.env.DB_PORT || '3306'),
    entities: [User],
    synchronize: true,
    logging: true
});

export default connectDB;
