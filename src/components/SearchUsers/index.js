import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField, Avatar, Typography } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { getUsers } from "../../redux/users/actions";
import "./index.style.css";

const Options = (option) => {
  return (
    <React.Fragment>
      <span className="avatar">
        <Avatar alt={option.login} src={option.avatar_url} />
      </span>
      <div className="option-text">
        <Typography variant="h6">{option.login}</Typography>
        <Typography variant="caption">{option.html_url}</Typography>
      </div>
    </React.Fragment>
  );
};

class SearchUsers extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { userState } = this.props;

    return (
      <div>
        <Autocomplete
          freeSolo={true}
          disableClearable={true}
          getOptionLabel={(option) => option.login}
          options={userState.users || []}
          renderOption={Options}
          onChange={this.props.handleSelect}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Git Users"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    userState: state.user,
  }),
  { getUsers }
)(SearchUsers);
