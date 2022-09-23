import UserModel from "#Schemas/user.schema.js";

const userUpdateDataController = async (req,res) => {
    const { id }  = req;
    const { name, surname, secondSurname, phone } = req.body;

    const existingUserById = await UserModel.findById(id).exec();
    if (!existingUserById)
        return res
            .status(401)
            .send('Usuario No Autorizado');

    existingUserById.name = name;
    existingUserById.surname = surname;
    existingUserById.secondSurname = secondSurname;
    existingUserById.phone = phone;

    await existingUserById.save();

    return res.status(200).send('Usuario actualizado')

};

export default userUpdateDataController;