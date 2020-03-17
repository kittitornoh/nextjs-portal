import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PatientNav from './side-nav/PatientNav';
import MainHeader from './header/MainHeader';
import ProviderNav from './side-nav/ProviderNav';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
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

const MainLayout = ({ children, role = 'patient' }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<MainHeader />
			{role === 'patient' && <PatientNav />}
			{role === 'provider' && <ProviderNav />}
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth='xl' className={classes.container}>
					<Grid container spacing={3}>
						{children}
					</Grid>
				</Container>
			</main>
		</div>
	);
};

export default MainLayout;
