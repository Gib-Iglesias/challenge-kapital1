import UserModel from "#Schemas/user.schema.js";

const userProfileController = async (req,res) => {
    const { id }  = req;

    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById)
        return res
            .status(401)
            .send('Usuario No Autorizado');

    const { _id, name, surname, secondSurname, email, phone, status } = existingUserById;

    return res.send({ _id, name, surname, secondSurname, email, phone, status })

};

export default userProfileController;