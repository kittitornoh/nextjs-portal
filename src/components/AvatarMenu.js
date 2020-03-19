import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { deauthenticate } from '../stores/auth/AuthActions';

const useStyle = makeStyles(theme => ({
	accountMenu: {
		minWidth: 240,
		marginTop: theme.spacing(5)
	}
}));

const AvatarMenu = ({ deauthenticate }) => {
	const classes = useStyle();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = e => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = e => {
		setAnchorEl(null);
	};

	return (
		<>
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
				className={classes.accountMenu}
			>
				<MenuItem onClick={handleClose}>Settings</MenuItem>
				<MenuItem onClick={deauthenticate}>Sign out</MenuItem>
			</Menu>
		</>
	);
};

export default connect(state => state, { deauthenticate })(AvatarMenu);
