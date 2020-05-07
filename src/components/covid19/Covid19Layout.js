import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Covid19Header from './Covid19Header';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
}));

const Covid19Layout = ({ children }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Covid19Header />
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth='xl' className={classes.container}>
					<Grid container justify='center' alignItems='center'>
						{children}
					</Grid>
				</Container>
			</main>
		</div>
	);
};

export default Covid19Layout;
