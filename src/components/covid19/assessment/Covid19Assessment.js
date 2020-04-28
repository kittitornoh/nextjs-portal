import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import Step from '@material-ui/core/Step';
import { connect } from 'react-redux';
import { getSurvey } from '../../../stores/survey/SurveyActions';
import FormDemographics from './FormDemographics';

const mapStateToProps = (state, ownProps) => ({
	token: state.auth.client_token,
});

const useStyles = makeStyles((theme) => ({}));

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
				<FormDemographics
					formData={formData}
					setFormData={setFormData}
					nextStep={nextStep}
				/>
			);
		case 1:
			return (
				<div>
					<h4>Travel & Exposure</h4>
				</div>
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

{
	/* <Stepper activeStep={step} alternativeLabel>
				{steps.map((label) => (
					<Step key='label'>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper> */
}
