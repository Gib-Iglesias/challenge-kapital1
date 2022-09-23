import { Router } from 'express';
// DTOs
import userJWTDTO from '#Dto/user-jwt.dto.js';
import userRegisterDTO from '#Dto/user-register.dto.js';
import userLoginDTO from '#Dto/user-login.dto.js';
import userUpdateDataDTO from '#Dto/user-update-data.dto.js';
import userUnregisterDTO from '#Dto/user-unregister.dto.js';
// Controllers
import userRegisterController from '#Controllers/user-register.controller.js';
import userLoginController from '#Controllers/user-login.controller.js';
import userProfileController from '#Controllers/user-profile.controller.js';
import userUpdateDataController from '#Controllers/user-update-data.controller.js';
import userActiveController from '#Controllers/user-active.controller.js';
import userUnregisterController from '#Controllers/user-unregister.controller.js';

const userRouter = Router();

userRouter.post('/register', userRegisterDTO, userRegisterController);
userRouter.post('/login', userLoginDTO, userLoginController);
userRouter.get('/profile', userJWTDTO, userProfileController);
userRouter.patch('/update-data', userJWTDTO, userUpdateDataDTO, userUpdateDataController);
userRouter.post('/active', userActiveController);
userRouter.delete('/unregister',  userJWTDTO, userUnregisterDTO, userUnregisterController);

export default userRouter;