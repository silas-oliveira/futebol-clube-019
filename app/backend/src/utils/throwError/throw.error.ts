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
  'Token must be a valid token/401',
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

export const throwEqualTeams = throwError(
  'throwEqualTeams',
  'It is not possible to create a match with two equal teams/401',
);

export const throwTeamNotExist = throwError(
  'throwTeamNotExist',
  'There is no team with such id!/404',
);
