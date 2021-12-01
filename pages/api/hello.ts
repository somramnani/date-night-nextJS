import type { NextApiRequest, NextApiResponse } from 'next'
import { UserAttributes } from '../../db/models/User'
import db from '../../db'

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserAttributes>) {
  const { Users } = db.sequelize.models

  return res.json({
    name: 'brent',
    email: 'bren@brent.com',
    password: 'sndfjksnfjkdsnjksdnjfnsjdknf',
  })
}
