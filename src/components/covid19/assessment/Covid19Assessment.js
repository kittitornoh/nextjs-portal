import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import Step from '@material-ui/core/Step';
import { connect } from 'react-redux';
import { getSurvey } from '../../../stores/survey/SurveyActions';
import FormDemographics from './FormDemographics';
import FormTravelAndExposure from './FormTravelAndExposure';
import FormSymptoms from './FormSymptoms';
import FormMedicalConditions from './FormMedicalConditions';
import FormResults from './FormResults';
import { Typography } from '@material-ui/core';
import { authenticateClient } from '../../../stores/auth/AuthActions';
import { getCountries } from '../../../stores/client/ClientActions';

const mapStateToProps = (state, ownProps) => ({
	token: state.auth.client_token,
	countries: state.client.countries,
	survey: state.client.survey,
});

const useStyles = makeStyles((theme) => ({
	formTitle: {
		marginTop: theme.spacing(2),
	},
	stepper: {
		width: '100%',
		marginTop: theme.spacing(2),
		marginBottom: 0,
		padding: theme.spacing(1),
	},
}));

const getSteps = () => {
	return [
		'Demographics',
		'Travel & Exposure',
		'Symptoms',
		'Medical Conditions',
	];
};

const Covid19Assessment = ({
	token,
	survey,
	getSurvey,
	getCountries,
	authenticateClient,
	countries,
}) => {
	const classes = useStyles();
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState({
		date_of_birth: null,
		country_id: '',
		state_id: '',
		state: '',
		county_id: '',
		county: '',
		postal: '',
		gender_id: '',
		race_id: '',
		race: '',
		ethnicity_id: '',
		ethnicity: '',
	});
	const [questionsLoaded, setQuestionsLoaded] = useState(false);

	const steps = getSteps();
	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => prev - 1);

	useEffect(() => {
		async function loadData() {
			await getSurvey(token);
			await getCountries(token);
		}

		loadData();
	}, []);

	if (survey === null) {
		return <div>Loading...</div>;
	} else {
		if (!questionsLoaded) {
			// add survey questions to formData
			survey.questions.forEach((question) => {
				question.question_answer_type === 'M'
					? (formData[question.question_id.toString()] = [])
					: (formData[question.question_id.toString()] = '');
			});

			setQuestionsLoaded(true);
		}

		switch (step) {
			case 0:
				return (
					<>
						<Typography variant='h5' className={classes.formTitle}>
							{survey.title}
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
						{countries !== null ? (
							<FormDemographics
								token={token}
								formData={formData}
								setFormData={setFormData}
								nextStep={nextStep}
								countries={countries}
							/>
						) : (
							<div>Loading...</div>
						)}
					</>
				);
			case 1:
				return (
					<>
						<Typography variant='h5' className={classes.formTitle}>
							{survey.title}
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
					<>
						<Typography variant='h5' className={classes.formTitle}>
							{survey.title}
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
						<FormSymptoms
							formData={formData}
							setFormData={setFormData}
							nextStep={nextStep}
							prevStep={prevStep}
						/>
					</>
				);
			case 3:
				return (
					<>
						<Typography variant='h5' className={classes.formTitle}>
							{survey.title}
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
						<FormMedicalConditions
							formData={formData}
							setFormData={setFormData}
							nextStep={nextStep}
							prevStep={prevStep}
						/>
					</>
				);
			default:
				return (
					<>
						<Typography variant='h5' className={classes.formTitle}>
							{survey.title}
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
						<FormResults />
					</>
				);
		}
	}
};

export default connect(mapStateToProps, {
	getSurvey,
	getCountries,
	authenticateClient,
})(Covid19Assessment);
