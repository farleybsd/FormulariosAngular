import { tErrorMessages } from '../types/error-messages.type';

export const errorMessages: tErrorMessages['errorMessages'] = {
  required: () => 'Campo obrigatório.',
  email: () => 'Email está inválido.',
  passwordsAreNotEqual: ({ field1, field2 }) =>
    `A senha do campo "${field1}" não é igual a do campo "${field2}"`,
  isNicknameTaken: () => 'O nickname já está em uso',
  minlength: ({ requiredLength, actualLength }) =>
    `O valor deve conter no mínimo ${requiredLength} caracteres (atualmente ${actualLength}).`,
  invalidMaxNames: ({ maxQuantity }) => `Quantidade máxima de nomes é ${maxQuantity}`,
  invalidFullname: () => 'Digite seu nome completo',
  similarName: () => 'Já existe um nome parecido com esse',
  fieldNameExists: () => 'Esse campo já existe',
  repeatedEmail: () => 'Já existe esse email na lista',
};

export const pendingMessage = 'Validando...';
