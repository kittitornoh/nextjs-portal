import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

const useStyles = makeStyles((theme) => ({
	toolbarSpace: {
		flexGrow: 1,
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

const Covid19Header = () => {
	const classes = useStyles();

	return (
		<AppBar position='absolute' className={classes.appBar}>
			<Toolbar>
				<IconButton
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='menu'
					onClick={() => Router.push('/')}
				>
					<FontAwesomeIcon icon={faChevronLeft} />
				</IconButton>
				<img src='/favicon.png' alt='inxite logo' height={40} />
			</Toolbar>
		</AppBar>
	);
};

export default Covid19Header;
