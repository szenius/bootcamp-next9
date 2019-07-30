import 'reflect-metadata';
import { config } from 'dotenv';
import { createConnection } from 'typeorm';

import { User } from './models/user/entity';

config();

const connectDB = async () => {
    if (process.env.JAWSDB_URL) {
        return await createConnection({
            type: 'mysql',
            url: process.env.JAWSDB_URL,
            entities: [User],
            synchronize: true,
            port: parseInt(process.env.DB_PORT || '3306'),
        });
    }
    else {
        return await createConnection({
            type: 'mysql',
            host: process.env.DB_HOST,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB,
            entities: [User],
            synchronize: true,
            port: parseInt(process.env.DB_PORT || '3306'),
        });
    }
}

export default connectDB;
