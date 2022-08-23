const throwError = (name: string, defaultMessage = '') => (message = defaultMessage) => {
  const error = new Error(message);
  error.name = name;
  throw error;
};

// verbos como nome do método === throwUnauthorizedError
export const throwUnauthorizedError = throwError(
  'UnauthorizedError',
  'Invalid fields/400',
);

export const throwInvalidToken = throwError(
  'InvalidToken',
  'Invalid Token/401/token',
);

export const throwTokenNotFound = throwError(
  'TokenNotFound',
  'Token not found/401/token',
);

export const throwExpiredOrInvalidToken = throwError(
  'expiredOrInvalidToken',
  'Expired or invalid token/401/token',
);

export const throwEmailOrPasswordIncorrect = throwError(
  'throwEmailOrPasswordIncorrect',
  'Incorrect email or password/401',
);
