import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import OktaProvider from 'next-auth/providers/okta'
import { NextApiRequest, NextApiResponse } from 'next'

const options = {
  providers: [
    OktaProvider({
      clientId: process.env.OKTA_CLIENTID || '',
      clientSecret: process.env.OKTA_CLIENTSECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID || '',
      clientSecret: process.env.GOOGLE_CLIENTSECRET || '',
    }),
  ],
}

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options)
