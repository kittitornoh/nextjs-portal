import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PatientNav from './side-nav/PatientNav';
import MainHeader from './header/MainHeader';
import ProviderNav from './side-nav/ProviderNav';
import AdminNav from './side-nav/AdminNav';

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
			<MainHeader />
			{role === 'patient' && <PatientNav />}
			{role === 'provider' && <ProviderNav />}
			{role === 'admin' && <AdminNav />}
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
