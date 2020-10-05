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
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event, value) {
    if (value && value.length >= 4)
      this.props.getUsers({ searchString: value });
  }

  render() {
    const { userState } = this.props;

    return (
      <div>
        <Autocomplete
          freeSolo={true}
          disableClearable={true}
          getOptionLabel={(option) => option.login}
          options={userState?.users?.items || []}
          renderOption={Options}
          onChange={this.props.handleSelect}
          onInputChange={this.handleSearch}
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
