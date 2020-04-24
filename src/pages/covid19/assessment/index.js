import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Covid19Assessment from '../../../components/covid19/assessment/Covid19Assessment';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
		padding: theme.spacing(2),
		backgroundColor: '#EAEFF1',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		minWidth: 360,
		minHeight: 480,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

const Covid19AssessmentPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<main className={classes.content}>
				<Paper className={classes.paper}>
					<Covid19Assessment />
				</Paper>
			</main>
		</div>
	);
};

export default Covid19AssessmentPage;
