/**
 * Landing page
 */
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import Copyright from '../Copyright';
import Covid19Alert from '../../components/covid19/Covid19Alert';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage:
			'url(https://inxitehealth.com/wp-content/uploads/2019/10/InXite_slide_ALPHA.jpg)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		transform: 'scaleX(-1)',
	},
}));

const LandingPageLayout = (props) => {
	const classes = useStyles();
	const [alerted, setAlerted] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setAlerted(true);
		}, 1000);
	}, []);

	return (
		<>
			<Collapse in={alerted}>
				<Covid19Alert />
			</Collapse>
			<Grid container component='main' className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={5} md={6} className={classes.image} />
				<Grid
					container
					item
					xs={12}
					sm={7}
					md={6}
					component={Paper}
					elevation={6}
					direction='column'
					justify='center'
					alignItems='center'
				>
					{props.children}
					<Copyright />
				</Grid>
			</Grid>
		</>
	);
};

export default LandingPageLayout;
