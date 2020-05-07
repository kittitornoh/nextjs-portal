import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Covid19Assessment from '../../../components/covid19/assessment/Covid19Assessment';
import Covid19Layout from '../../../components/covid19/Covid19Layout';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		minWidth: 1280,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
}));

const Covid19AssessmentPage = () => {
	const classes = useStyles();

	return (
		<Covid19Layout>
			<Paper className={classes.paper}>
				<Covid19Assessment />
			</Paper>
		</Covid19Layout>
	);
};

export default Covid19AssessmentPage;
