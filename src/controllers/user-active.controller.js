import UserModel from "#Schemas/user.schema.js";

const userActiveController = async (req,res) => {
    const { status } = req.body;

    const activeUsers = await UserModel.find({status}).exec();

    return res.status(200).send(activeUsers);

};

export default userActiveController;