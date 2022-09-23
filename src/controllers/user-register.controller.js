import UserModel from "#Schemas/user.schema.js";
import { hash } from 'bcrypt';

const userRegisterController = async (req,res) => {
    const { name, surname, secondSurname, email, password, phone, status }  = req.body;

    const existingUserByEmail = await UserModel.findOne({email}).exec();
    if (existingUserByEmail)
        return res
            .status(409)
            .send('Ya existe un usuario registrado con ese email');

    const hashedPassword = await hash(password, 12);

    const user = new UserModel({
        name,
        surname,
        secondSurname,
        email,
        password:hashedPassword,
        phone,
        status
    });

    await user.save();

    return res.status(201).send('¡¡ Usuario registrado con exito !!');

};

export default userRegisterController;