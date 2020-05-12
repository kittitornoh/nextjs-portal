import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Covid19Header from './Covid19Header';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { authenticateClient } from '../../stores/auth/AuthActions';
import CircularProgress from '@material-ui/core/CircularProgress';

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

const mapStateToProps = (state) => ({
	token: state.auth.client_token,
});

const Covid19Layout = ({ children, token, authenticateClient }) => {
	const classes = useStyles();

	useEffect(() => {
		async function loadData() {
			await authenticateClient();
		}

		// authenticate the client if need be
		if (token === null) {
			loadData();
		}
	}, []);

	if (token === null) {
		return (
			<div className={classes.root}>
				<Covid19Header />
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth='xl' className={classes.container}>
						<Grid container justify='center' alignItems='center'>
							<CircularProgress color='primary' />
						</Grid>
					</Container>
				</main>
			</div>
		);
	} else {
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
	}
};

export default connect(mapStateToProps, { authenticateClient })(Covid19Layout);
