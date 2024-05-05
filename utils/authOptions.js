import GoogleProvider  from 'next-auth/providers/google'
import connectDB from '@/config/database'
import User from '@/models/User'
console.log('hello')
export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
        })
      ],
      callbacks:{
        async signIN({profile}){
          console.log('reached')
          await connectDB();
          const userExist = await User.findOne({email:profile.email})
          console.log(userExist)
          if(!userExist){
            const username = profile.name.slice(0,20)
               User.create({
                email:profile.email,
                username,
                image:profile.picture
               })
          }
          return true
        },//connect to db, check if user exist in db , if not add return true to sign in
        async session({session}){
          const user = await User.findOne({email:session.user.email})
          console.log(user)
          session.user.id = user._id.toString()
          return session
        } //get user from db, assign id to user to session, return the session
        
      }
}