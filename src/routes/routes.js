import User from "../pages/user";
import Repository from "../pages/repository";

const routes = [
  {
    path: "/",
    exact: true,
    component: User,
  },
  {
    path: "/:user/:repo",
    exact: false,
    component: Repository,
  },
];

export default routes;
