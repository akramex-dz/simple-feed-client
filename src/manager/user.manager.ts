import * as userClient from '../clients/user.clients';

async function getUserProfile() {
  return userClient.getUserProfile();
}

async function searchUsers(query: string) {
  return userClient.searchUsers(query);
}

async function followUser(userId: string) {
  return userClient.followUser(userId);
}

async function unfollowUser(userId: string) {
  return userClient.unfollowUser(userId);
}

async function listFollowers() {
  return userClient.listFollowers();
}

async function listFollowings() {
  return userClient.listFollowings();
}

export { 
    getUserProfile, 
    searchUsers, 
    followUser, 
    unfollowUser, 
    listFollowers, 
    listFollowings 
};
