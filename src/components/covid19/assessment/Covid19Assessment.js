import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import Step from '@material-ui/core/Step';
import { connect } from 'react-redux';
import { getSurvey } from '../../../stores/survey/SurveyActions';
import FormDemographics from './FormDemographics';
import FormTravelAndExposure from './FormTravelAndExposure';
import { Typography } from '@material-ui/core';

const mapStateToProps = (state, ownProps) => ({
	token: state.auth.client_token,
});

const useStyles = makeStyles((theme) => ({
	stepper: {
		width: '100%',
		marginTop: theme.spacing(2),
		marginBottom: 0,
		padding: theme.spacing(1),
	},
	formTitle: {
		marginTop: theme.spacing(2),
	},
}));

const getSteps = () => {
	return ['Demographics', 'Travel & Exposure', 'Symptoms'];
};

const Covid19Assessment = ({ token, getSurvey }) => {
	//getSurvey(token);

	const classes = useStyles();
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState({
		dob: null,
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

	switch (step) {
		case 0:
			return (
				<>
					<Typography variant='h5' className={classes.formTitle}>
						COVID-19 Risk Assessment
					</Typography>
					<Stepper
						activeStep={step}
						alternativeLabel
						className={classes.stepper}
					>
						{steps.map((label) => (
							<Step key='label'>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<FormDemographics
						formData={formData}
						setFormData={setFormData}
						nextStep={nextStep}
					/>
				</>
			);
		case 1:
			return (
				<>
					<Typography variant='h5'>COVID-19 Risk Assessment</Typography>
					<Stepper activeStep={step} alternativeLabel>
						{steps.map((label) => (
							<Step key='label'>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					<FormTravelAndExposure
						formData={formData}
						setFormData={setFormData}
						nextStep={nextStep}
						prevStep={prevStep}
					/>
				</>
			);
		case 2:
			return (
				<div>
					<h4>Symptoms</h4>
				</div>
			);
		default:
			return (
				<div>
					<h4>done</h4>
				</div>
			);
	}
};

export default connect(mapStateToProps, { getSurvey })(Covid19Assessment);
