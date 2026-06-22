import { TErrorMessages } from "../types/error-messages.types";

export const errorMessages: TErrorMessages['errorMessages'] = {
  required: () => 'Campo Obrigatorio',
  email:    () => 'Email esta invalido',
  passwordAreNotEqual: ({field1,field2}) => `A senha do campo "${field1}" nao e igual a do campo "${field2}" `,
  isNicknameTaken: () => 'Nickname já está em uso',
  minlength: ({requiredLength,actualLength}) => `O Valor deve conter no minino ${requiredLength} caracteres (atualmente ${actualLength})`
};

export const pendingMessage = 'Validando...';
