import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
import { connect } from "react-redux";
import { deauthenticate } from "../stores/auth/authActions";

const AvatarMenu = ({ deauthenticate }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = e => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Avatar
        aria-controls='avatar-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        KH
      </Avatar>
      <Menu
        id='avatar-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={deauthenticate}>Sign out</MenuItem>
      </Menu>
    </div>
  );
};

export default connect(state => state, { deauthenticate })(AvatarMenu);
