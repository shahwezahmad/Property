import {Schema, model, models}  from "mongoose";

const userSchema = new Schema({
    email: {
        type:String,
        unique: [true, 'email already exists'],
        required:[true,'email is mandatory']
    },
    username: {
        type:String,
        required:[true,'email is mandatory']
    },
    image:{
        type:String
    },
    bookmarks:[{
        type:Schema.Types.ObjectId,
        ref:'Property'
    }]

},{timestamps:true})

const User = models.User || model('User',userSchema)

export default User