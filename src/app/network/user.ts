import axios from 'axios';

interface IUser {
    name: string;
}

export const addUser = async (name: string): Promise<IUser> => {
    const response = await axios.post('/api/user', { name });
    return response.data as IUser;
}

export const fetchAllUsers = async (): Promise<IUser[]> => {
    const response = await axios.get(`/api/user`);
    return response.data as IUser[];
}