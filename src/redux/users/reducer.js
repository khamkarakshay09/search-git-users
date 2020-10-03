import {
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REPOS_SUCCESS,
  GET_USER_REPO_SUCCESS,
  GET_USER_REPO_FAILURE,
} from "./actions";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case GET_USER_REPOS_SUCCESS: {
      return {
        ...state,
        repos: action.payload,
      };
    }
    case GET_USER_REPO_SUCCESS: {
      return {
        ...state,
        repo: action.payload,
      };
    }
    case GET_USER_REPO_FAILURE:
    case GET_USER_FAILURE:
    case GET_USERS_FAILURE:
    default: {
      return {
        ...state,
      };
    }
  }
}
