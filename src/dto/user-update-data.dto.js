import { nameDTOSchema,
    phoneDTOSchema,
    secondSurnameDTOSchema,
    statusDTOSchema,
    surnameDTOSchema
} from '#Lib/dto-types.js';
import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';

// Format & Errors Management (Using AJV & Typebox)
const UpdateDataDTOSchema = Type.Object({
    name:nameDTOSchema,
    surname:surnameDTOSchema,
    secondSurname:secondSurnameDTOSchema,
    phone:phoneDTOSchema,
    status:statusDTOSchema,
},
{
    additionalProperties: false,
    errorMessage: {
        additionalProperties: 'El formato del objeto no es valido',
    },
}
);

// Usage for AJV
const ajv = new Ajv({allErrors: true});
ajv.addFormat('status', /^(?=.*[a-z]).*$/);
addErrors(ajv);

// Compile AJV Validations
const validateSchema = ajv.compile(UpdateDataDTOSchema)

// Create Middleware to work with Validations
const userUpdateDataDTO = (req,res,next) => {
    const isDTOValid = (req.body)
    if(!isDTOValid)
        return res
            .status(400)
            .send({
                errors: validateSchema.errors.map((error) => error.message)
            });
    next();
};

export default userUpdateDataDTO;