const API_URL = `${import.meta.env.VITE_APP_API_URL}/comments`;

async function getCommentsByUserId(userId: string) {
  const response = await fetch(`${API_URL}/user/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch comments by user ID');
  }

  const data = await response.json();
  return data;
}

async function getCommentsByPostId(postId: string) {
  const response = await fetch(`${API_URL}/post/${postId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch comments by post ID');
  }

  const data = await response.json();
  return data;
}

async function getCommentById(commentId: string) {
  const response = await fetch(`${API_URL}/comment/${commentId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch comment by ID');
  }

  const data = await response.json();
  return data;
}

async function createComment(postId: string, content: string) {
  const response = await fetch(`${API_URL}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
    body: JSON.stringify({ postId, content }),
  });

  if (!response.ok) {
    throw new Error('Failed to create comment');
  }

  const data = await response.json();
  return data;
}

async function updateCommentById(commentId: string, content: string) {
  const response = await fetch(`${API_URL}/${commentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
    body: JSON.stringify({ content }),
  });

  if (!response.ok) {
    throw new Error('Failed to update comment');
  }

  const data = await response.json();
  return data;
}

async function deleteCommentById(commentId: string) {
  const response = await fetch(`${API_URL}/${commentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete comment');
  }

  const data = await response.json();
  return data;
}

async function likeComment(commentId: string) {
  const response = await fetch(`${API_URL}/${commentId}/like`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to like comment');
  }

  const data = await response.json();
  return data;
}

async function unlikeComment(commentId: string) {
  const response = await fetch(`${API_URL}/${commentId}/unlike`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to unlike comment');
  }

  const data = await response.json();
  return data;
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
