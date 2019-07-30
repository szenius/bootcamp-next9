import { NextApiRequest, NextApiResponse } from 'next';
import { listUser, addUser } from 'server/models/user';

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const getAllUsers = async () => {
        const allUsers = await listUser();
        res.json(allUsers);
    }

    const postUser = async () => {
        const { name } = req.body;
        const newUser = await addUser(name);
        res.json(newUser);
    }

    switch (req.method) {
        case 'GET': return getAllUsers();
        case 'POST': return postUser();
    };

}