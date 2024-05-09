const API_URL = import.meta.env.VITE_APP_API_URL; 

async function getUserProfile() {
  const response = await fetch(`${API_URL}/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }

  const data = await response.json();
  return data;
}

async function searchUsers(query: string) {
  const response = await fetch(`${API_URL}/search?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to search users');
  }

  const data = await response.json();
  return data;
}

async function followUser(userId: string) {
  const response = await fetch(`${API_URL}/${userId}/follow`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to follow user');
  }

  const data = await response.json();
  return data;
}

async function unfollowUser(userId: string) {
  const response = await fetch(`${API_URL}/${userId}/unfollow`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to unfollow user');
  }

  const data = await response.json();
  return data;
}

async function listFollowers() {
  const response = await fetch(`${API_URL}/followers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to list followers');
  }

  const data = await response.json();
  return data;
}

async function listFollowings() {
  const response = await fetch(`${API_URL}/followings`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
  });

  if (!response.ok) {
    throw new Error('Failed to list followings');
  }

  const data = await response.json();
  return data;
}

export { 
    getUserProfile, 
    searchUsers, 
    followUser, 
    unfollowUser, 
    listFollowers, 
    listFollowings 
};
