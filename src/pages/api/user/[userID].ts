import { NextApiRequest, NextApiResponse } from 'next';
import { addUser } from 'server/models/user';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { userID } = req.query;
    const newUser = await addUser(userID as string);
    res.json(newUser);
};