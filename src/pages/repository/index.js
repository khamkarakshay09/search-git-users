import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { getUserRepo } from "../../redux/users/actions";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import StarIcon from "@material-ui/icons/Star";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ErrorIcon from "@material-ui/icons/Error";
import "./index.style.css";

class Repository extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.getUserRepo({ ...params });
  }
  render() {
    const { userState } = this.props;
    return (
      <Card className="repo-card">
        <CardHeader
          className="repo-card-header"
          avatar={
            <Avatar
              alt={userState?.repo?.owner?.login}
              src={userState?.repo?.owner?.avatar_url}
            />
          }
          title={userState?.repo?.owner?.login}
          subheader={userState?.repo?.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {userState?.repo?.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="text" startIcon={<DeviceHubIcon />}>
            {userState?.repo?.forks}
          </Button>
          <Button variant="text" startIcon={<StarIcon />}>
            {userState?.repo?.stargazers_count}
          </Button>
          <Button variant="text" startIcon={<VisibilityIcon />}>
            {userState?.repo?.watchers}
          </Button>
          <Button variant="text" startIcon={<ErrorIcon />}>
            {userState?.repo?.open_issues}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    userState: state.user,
  }),
  { getUserRepo }
)(Repository);
