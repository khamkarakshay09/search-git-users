import axiosInstance from "./index";

export function getUsersService(searchString) {
  return axiosInstance.get(`/search/users?q=${searchString}`);
}

export function getUserService(user) {
  return axiosInstance.get(`/users/${user}`);
}

export function getReposService(user) {
  return axiosInstance.get(`/users/${user}/repos`);
}

export function getRepoService(user, repo) {
  return axiosInstance.get(`/repos/${user}/${repo}`);
}