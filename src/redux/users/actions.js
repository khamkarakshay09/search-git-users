export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const getUsers = (payload) => {
  return {
    type: GET_USERS_REQUEST,
    payload,
  };
};

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const getUser = (payload) => {
  return {
    type: GET_USER_REQUEST,
    payload,
  };
};

export const GET_USER_REPOS_REQUEST = "GET_USER_REPOS_REQUEST";
export const GET_USER_REPOS_SUCCESS = "GET_USER_REPOS_SUCCESS";
export const GET_USER_REPOS_FAILURE = "GET_USER_REPOS_FAILURE";

export const GET_USER_REPO_REQUEST = "GET_USER_REPO_REQUEST";
export const GET_USER_REPO_SUCCESS = "GET_USER_REPO_SUCCESS";
export const GET_USER_REPO_FAILURE = "GET_USER_REPO_FAILURE";

export const getUserRepo = (payload) => {
  return {
    type: GET_USER_REPO_REQUEST,
    payload,
  };
};
