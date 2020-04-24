import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import Step from '@material-ui/core/Step';

const useStyles = makeStyles((theme) => ({}));

const getSteps = () => {
	return ['Demographics', 'Travel & Exposure', 'Symptoms'];
};

const Covid19Assessment = () => {
	const classes = useStyles();
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState({
		dob: '',
		country: '',
		state: '',
		county: '',
		zipcode: '',
		race: '',
		gender: '',
		ethnicity: '',
	});

	const steps = getSteps();
	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => prev - 1);

	return (
		<>
			<Stepper activeStep={step} alternativeLabel>
				{steps.map((label) => (
					<Step key='label'>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</>
	);
};

export default Covid19Assessment;
