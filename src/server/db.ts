import 'reflect-metadata';
import { config } from 'dotenv';
import { createConnection } from 'typeorm';

import { User } from './models/user/entity';

config();

const connectDB = createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    entities: [User],
    synchronize: true,
    port: parseInt(process.env.DB_PORT || '3306'),
});

export default connectDB;
