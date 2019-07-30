import { NextApiRequest, NextApiResponse } from 'next';
import { listUser } from 'server/models/user';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const allUsers = await listUser();
    res.json(allUsers);
}