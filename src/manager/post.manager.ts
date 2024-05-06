import * as postClient from '../clients/post.client';

async function fetchAllPosts() {
  return postClient.fetchAllPosts();
}

async function fetchPostById(postId : string) {
  return postClient.fetchPostById(postId);
}

async function fetchPostsByUserId(userId : string) {
  return postClient.fetchPostsByUserId(userId);
}

async function fetchPostsByUserIds(userIds : string[]) {
  return postClient.fetchPostsByUserIds(userIds);
}

async function fetchPostsOfFollowings() {
  return postClient.fetchPostsOfFollowings();
}

async function createNewPost(content: string) {
  return postClient.createNewPost(content);
}

async function updatePostById(postId:string, content:string) {
  return postClient.updatePostById(postId, content);
}

async function deletePostById(postId:string) {
  return postClient.deletePostById(postId);
}

async function likePost(postId:string) {
  return postClient.likePost(postId);
}

async function unlikePost(postId:string) {
  return postClient.unlikePost(postId);
}

export { 
    fetchAllPosts, 
    fetchPostById, 
    fetchPostsByUserId, 
    fetchPostsByUserIds, 
    fetchPostsOfFollowings, 
    createNewPost, 
    updatePostById, 
    deletePostById, 
    likePost, 
    unlikePost 
};
