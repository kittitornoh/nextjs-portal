import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import AvatarMenu from '../AvatarMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/pro-solid-svg-icons';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	toolbarSpace: {
		flexGrow: 1
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: '#ffffff',
		boxShadow: 'none',
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
		color: theme.palette.grey[600]
	},
	appBarSpacer: theme.mixins.toolbar,
	notifications: {
		marginRight: theme.spacing(2)
	}
}));

const MainHeader = () => {
	const classes = useStyles();

	return (
		<AppBar position='absolute' className={classes.appBar}>
			<Toolbar>
				<img src='/inxite-logo.svg' alt='inxite logo' height={40} />
				<div className={classes.toolbarSpace} />
				<IconButton
					aria-label='show 2 new notifications'
					color='inherit'
					className={classes.notifications}
				>
					<Badge badgeContent={2} color='error'>
						<FontAwesomeIcon icon={faBell} />
					</Badge>
				</IconButton>
				<AvatarMenu />
			</Toolbar>
		</AppBar>
	);
};

export default MainHeader;
