// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { UserAttributes } from '../../db/models/User'

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserAttributes>) {
  return res.json({ name: 'blah', email: 'bla@bla.com', password: '12345' })
}
