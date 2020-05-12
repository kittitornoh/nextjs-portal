import React from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		zIndex: theme.zIndex.drawer + 2,

		'& :hover': {
			cursor: 'pointer',
		},

		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

const Covid19Alert = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Alert
				severity='info'
				onClick={() => {
					Router.push('/covid19/assessment');
				}}
			>
				<AlertTitle>COVID-19 Survey</AlertTitle>
				[TEMPLATE] This survey can help you understand what to do next about
				COVID-19 - click to take the survey.
			</Alert>
		</div>
	);
};

export default Covid19Alert;
