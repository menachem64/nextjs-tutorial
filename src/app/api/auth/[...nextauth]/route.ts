import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "null" ,
            clientSecret:  process.env.GOOGLE_CLIENT_SECRET || "null",
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }        
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/signin'
    }
}


const handler = NextAuth(authOptions)
 

export { handler as GET, handler as POST};