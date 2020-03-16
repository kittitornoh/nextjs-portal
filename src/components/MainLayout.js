import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import AvatarMenu from './AvatarMenu';
import PatientNav from './patient-nav/PatientNav';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	toolbarSpace: {
		flexGrow: 1
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: '#ffffff',
		boxShadow: 'none',
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	}
}));

const MainLayout = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='absolute' className={classes.appBar}>
				<Toolbar>
					<img
						src='/inxite-logo.svg'
						alt='inxite logo'
						height={40}
						className={classes.logo}
					/>
					<div className={classes.toolbarSpace} />
					<AvatarMenu />
				</Toolbar>
			</AppBar>
			<PatientNav />
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth='lg' className={classes.container}>
					<Grid container spacing={3}>
						{children}
					</Grid>
				</Container>
			</main>
		</div>
	);
};

export default MainLayout;
