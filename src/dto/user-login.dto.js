import { emailDTOSchema, passwordDTOSchema } from '#Lib/dto-types.js';
import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';

// Format & Errors Management (Using AJV & Typebox)
const LoginDTOSchema = Type.Object({
    email:emailDTOSchema,
    password:passwordDTOSchema,
},
{
    additionalProperties: false,
    errorMessage: {
        additionalProperties: 'El formato del objeto no es valido',
    },
}
);

// Usage for AJV
const ajv = new Ajv({allErrors: true})
    .addKeyword('kind')
    .addKeyword('modifier');
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv, ['email']);
addErrors(ajv);

// Compile AJV Validations
const validateSchema = ajv.compile(LoginDTOSchema)

// Create Middleware to work with Validations
const userLoginDTO = (req,res,next) => {
    const isDTOValid = (req.body)
    if(!isDTOValid)
        return res
            .status(400)
            .send({
                errors: validateSchema.errors.map((error) => error.message)
            });
    next();
};

export default userLoginDTO;