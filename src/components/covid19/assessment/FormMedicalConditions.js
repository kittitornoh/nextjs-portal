import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import FormikRadioGroup from '../../FormikRadioGroup';
import { submitSurvey } from '../../../stores/client/ClientActions';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		maxWidth: 800,
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
	},
	formItem: {
		marginTop: theme.spacing(3),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottom: 'dotted #eee',
	},
	formText: { marginTop: theme.spacing(3) },
	radioGroup: {
		display: 'flex',
		flexDirection: 'row',
	},
	btnGroup: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(2),
		marginLeft: theme.spacing(2),
		minWidth: 200,
	},
}));

const mapStateToProps = (state) => ({
	token: state.auth.client_token,
	survey: state.client.survey,
	participantId: state.client.participantId,
});

const FormMedicalConditions = ({
	token,
	formData,
	setFormData,
	nextStep,
	prevStep,
	survey,
	participantId,
	submitSurvey,
}) => {
	const classes = useStyles();
	const [direction, setDirection] = useState('back');

	return (
		<>
			<Formik
				initialValues={formData}
				onSubmit={(values) => {
					let surveyData = {
						participant_id: 13,
						survey_id: 1,
						questions: [],
					};

					for (let [key, value] of Object.entries(values)) {
						surveyData.questions.push({
							question_id: parseInt(key),
							answer: value,
						});
					}

					//console.log(surveyData);

					submitSurvey(token, surveyData);

					setFormData(values);
					direction === 'back' ? prevStep() : nextStep();
				}}
			>
				{(props) => (
					<Form className={classes.form}>
						{survey.questions.map((question) => {
							if (question.page === 3) {
								if (question.question_answer_type === 'S') {
									return (
										<div
											key={question.question_id}
											className={classes.formItem}
										>
											<FormLabel>{question.question}</FormLabel>
											<Field
												name={question.question_id.toString()}
												options={['Yes', 'No', 'Unknown']}
												component={FormikRadioGroup}
												className={classes.radioGroup}
											/>
										</div>
									);
								} else if (question.question_answer_type === 'T') {
									return (
										<TextField
											multiline
											rows={3}
											className={classes.formText}
											key={question.question_id.toString()}
											id={question.question_id.toString()}
											label={question.question}
											type='text'
											name={question.question_id.toString()}
											value={props.values[question.question_id.toString()]}
											onChange={(e) =>
												props.setFieldValue(
													question.question_id.toString(),
													e.target.value
												)
											}
											onBlur={() => {
												props.setFieldTouched(
													question.question_id.toString(),
													true
												);
											}}
											variant='outlined'
											fullWidth
										/>
									);
								}
							}
						})}
						<div className={classes.btnGroup}>
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
								Finish
							</Button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default connect(mapStateToProps, { submitSurvey })(
	FormMedicalConditions
);
