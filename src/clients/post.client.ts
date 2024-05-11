const API_URL = import.meta.env.VITE_APP_API_GATEWAY + '/posts';

// Fetch all posts
async function fetchAllPosts() {
    const response = await fetch(`${API_URL}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const posts = await response.json();
    return posts;
  }
  
// Fetch post by ID
async function fetchPostById(postId : string) {
  const response = await fetch(`${API_URL}/post/${postId}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  const post = await response.json();
  return post;
}

// Fetch posts by user ID
async function fetchPostsByUserId(userId : string) {
  const response = await fetch(`${API_URL}/user/${userId}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  const posts = await response.json();
  return posts;
}

// Fetch posts by user IDs
async function fetchPostsByUserIds(userIds : string[]) {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ userIds }),
  });
  const posts = await response.json();
  return posts;
}

// Fetch posts of followings of logged in user
async function fetchPostsOfFollowings() {
  const response = await fetch(`${API_URL}/followings`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  const posts = await response.json();
  return posts;
}

// Create a new post
async function createNewPost(content: string) {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ content }),
  });
  const post = await response.json();
  return post;
}

// Update post by ID
async function updatePostById(postId:string, content:string) {
  const response = await fetch(`${API_URL}/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ content }),
  });
  const post = await response.json();
  return post;
}

// Delete post by ID
async function deletePostById(postId:string) {
  const response = await fetch(`${API_URL}/${postId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  const post = await response.json();
  return post;
}

// Like a post
async function likePost(postId:string) {
  const response = await fetch(`${API_URL}/${postId}/like`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  const post = await response.json();
  return post;
}

// Unlike a post
async function unlikePost(postId:string) {
  const response = await fetch(`${API_URL}/${postId}/unlike`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  const post = await response.json();
  return post;
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
