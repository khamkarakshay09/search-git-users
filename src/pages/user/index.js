import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  CardHeader,
  Avatar,
  Button,
  Typography,
  IconButton,
  CardContent,
  CardActions,
} from "@material-ui/core";
import SearchUsers from "../../components/SearchUsers";
import { getUser } from "../../redux/users/actions";
import GitHubIcon from "@material-ui/icons/GitHub";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import InfoIcon from "@material-ui/icons/Info";
import "./index.style.css";

const CardSubHeader = ({ user }) => (
  <>
    <Button variant="text" startIcon={<GitHubIcon />}>
      {user.public_repos}
    </Button>
    <Button startIcon={<GroupAddIcon />}>{user.followers}</Button>
  </>
);

const UserRepos = ({ repos }) =>
  repos.length > 1 &&
  repos.map((repo, index) => (
    <Card key={index} className="repo-gird-list">
      <CardContent className="repo-gird-list-content">
        <GitHubIcon className="avatar" />
        {repo.full_name}
      </CardContent>
      <CardActions>
        <Link to={`/${repo.owner.login}/${repo.name}`}>
          <IconButton color="primary" name={repo.name} id={repo.owner.login}>
            <InfoIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  ));

class User extends Component {
  constructor(props) {
    super(props);

    this.handleSelectedUser = this.handleSelectedUser.bind(this);
  }

  handleSelectedUser(e, value) {
    this.props.getUser({ user: value.login });
  }

  render() {
    const { userState } = this.props;
    return (
      <Container>
        <SearchUsers handleSelect={this.handleSelectedUser} />
        {userState && userState.user && (
          <Card>
            <CardHeader
              className="user-card-header"
              avatar={
                <Avatar
                  alt={userState.user.login}
                  src={userState.user.avatar_url}
                />
              }
              title={userState.user.login}
              subheader={<CardSubHeader user={userState.user} />}
            />
            <Typography variant="overline">Repositories</Typography>
            {userState.repos && <UserRepos repos={userState.repos}></UserRepos>}
          </Card>
        )}
      </Container>
    );
  }
}

export default connect(
  (state) => ({
    userState: state.user,
  }),
  { getUser }
)(User);
