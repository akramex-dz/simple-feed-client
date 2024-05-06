import * as authClient from '../clients/auth.client';

async function registerUser(email: string, username: string, password: string) {
  return authClient.registerUser(email, username, password);
}

async function loginUser(username: string, password: string) {
  return authClient.loginUser(username, password);
}

async function refreshToken(refreshToken: string) {
  return authClient.refreshToken(refreshToken);
}

export { 
    registerUser, 
    loginUser, 
    refreshToken,
};
