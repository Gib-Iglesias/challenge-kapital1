import { Type } from '@sinclair/typebox';
import { Format } from '@sinclair/typebox/format/index.js';

export const nameDTOSchema = Type.String({
        minLength: 2,
        maxLength: 30,
        errorMessage: {
            minLength: 'El nombre debe tener al menos 2 caracteres de longitud',
            maxLength: 'El nombre debe tener como máximo 30 caracteres de longitud',
        },
});

export const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 60,
    errorMessage: {
        minLength: 'El primer apellido debe tener al menos 4 caracteres de longitud',
        maxLength: 'El primer apellido debe tener como máximo 60 caracteres de longitud',
    },
});

export const secondSurnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 60,
    errorMessage: {
        minLength: 'El segundo apellido debe tener al menos 4 caracteres de longitud',
        maxLength: 'El segundo apellido debe tener como máximo 60 caracteres de longitud',
    },
});

Format.Set('email', value => value === 'String')
export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'El tipo del email no es válido, debe ser un string',
        format: 'El formato del email no es valido, debe cumpplir el [RFC5322]'
    },
});

Format.Set('password', value => value === 'Regex')
export const passwordDTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 100,
    errorMessage: {
        type: 'El tipo de password no es válido',
        format: 'El password debe contener al menos una mayúscula, una minúscula y un número',
        minLength: 'El password debe tener al menos 10 caracteres de longitud',
        maxLength: 'El password debe tener como máximo 100 caracteres de longitud',
    },
});

export const phoneDTOSchema = Type.Number({
    minimum: 1,
    maximum: 20,
    errorMessage: {
        minimum: 'El phone debe tener mínimo 1 caracter',
        maximum: 'El phone debe tener máximo 20 caracteres',
    },
});

Format.Set('status', value => value === 'Boolean')
export const statusDTOSchema = Type.Boolean({
    format: 'status',
    errorMessage: {
        type: 'El tipo de status no es válido',
        format: 'El status debe ser de tipo boolean',
    },
});
