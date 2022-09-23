import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {type: String, require: true, minLength: 2, maxLength: 30},
    surname: {type: String, require: true, minLength: 4, maxLength: 60},
    secondSurname: {type: String, require: true, minLength: 4, maxLength: 60},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true, minLength: 10, maxLength: 100, unique: true},
    phone: {type: Number, require: false},
    status: {type: Boolean, require: true, default: true}
},
{
    timestamps: true
});

const UserModel = model('User', userSchema);

export default UserModel;