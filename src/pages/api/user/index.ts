import { NextApiRequest, NextApiResponse } from 'next';
// import { listUser, addUser } from 'server/models/user';

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const getAllUsers = async () => {
        res.json([{name: 'hello'}]);
        // const allUsers = await listUser();
        // res.json(allUsers);
    }

    const postUser = async () => {
        res.json({name: 'hello'});
        // const { name } = req.body;
        // const newUser = await addUser(name);
        // res.json(newUser);
    }

    switch (req.method) {
        case 'GET': return getAllUsers();
        case 'POST': return postUser();
    };

}