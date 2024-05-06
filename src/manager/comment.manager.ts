import * as commentClient from '../clients/comment.client';

async function getCommentsByUserId(userId: string) {
  return commentClient.getCommentsByUserId(userId);
}

async function getCommentsByPostId(postId: string) {
  return commentClient.getCommentsByPostId(postId);
}

async function getCommentById(commentId: string) {
  return commentClient.getCommentById(commentId);
}

async function createComment(postId: string, content: string) {
  return commentClient.createComment(postId, content);
}

async function updateCommentById(commentId: string, content: string) {
  return commentClient.updateCommentById(commentId, content);
}

async function deleteCommentById(commentId: string) {
  return commentClient.deleteCommentById(commentId);
}

async function likeComment(commentId: string) {
  return commentClient.likeComment(commentId);
}

async function unlikeComment(commentId: string) {
  return commentClient.unlikeComment(commentId);
}

export { 
    getCommentsByUserId,
    getCommentsByPostId,
    getCommentById,
    createComment,
    updateCommentById,
    deleteCommentById, 
    likeComment, 
    unlikeComment 
};