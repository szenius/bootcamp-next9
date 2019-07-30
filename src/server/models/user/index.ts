import { User, IUser } from './entity';
import connectDB from 'server/db';

export const addUser = async (name: string): Promise<IUser> => {
    const connection = await connectDB;
    const users = connection.getRepository(User);
    const newUser = new User();
    newUser.name = name;
    await users.save(newUser);
    return newUser;
}

export const listUser = async (): Promise<IUser[]> => {
    const connection = await connectDB;
    const users = connection.getRepository(User);
    const userList = await users.find();
    return userList;
}