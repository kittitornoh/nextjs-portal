import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		margin: theme.spacing(1),
	},
}));

const FormTravelAndExposure = ({
	formData,
	setFormData,
	nextStep,
	prevStep,
}) => {
	const classes = useStyles();
	const [direction, setDirection] = useState('back');
	return (
		<>
			<Formik
				initialValues={formData}
				onSubmit={(values) => {
					setFormData(values);
					direction === 'back' ? prevStep() : nextStep();
				}}
			>
				<Form className={classes.form}>
					<div>
						<Button
							type='submit'
							variant='outlined'
							color='primary'
							className={classes.button}
							onClick={() => setDirection('back')}
						>
							Back
						</Button>
						<Button
							type='submit'
							variant='contained'
							color='primary'
							className={classes.button}
							onClick={() => setDirection('forward')}
						>
							Next
						</Button>
					</div>
				</Form>
			</Formik>
		</>
	);
};

export default FormTravelAndExposure;
