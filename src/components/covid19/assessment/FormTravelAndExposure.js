import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormikRadioGroup from '../../FormikRadioGroup';

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

		'& .MuiFormLabel-root': {
			maxWidth: '60%',
			marginBottom: theme.spacing(1),
		},
	},
	radioGroup: {
		display: 'flex',
		flexDirection: 'row',
	},
	formSelect: {
		width: '100%',
		marginTop: theme.spacing(2),
	},
	formSelectLabel: {
		paddingBottom: theme.spacing(2),
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

const mapStateToProps = (state, ownProps) => ({
	survey: state.client.survey,
});

const FormTravelAndExposure = ({
	formData,
	setFormData,
	nextStep,
	prevStep,
	survey,
}) => {
	const classes = useStyles();
	const [direction, setDirection] = useState('back');

	useEffect(() => {});

	return (
		<>
			<Formik
				initialValues={formData}
				onSubmit={(values) => {
					setFormData(values);
					direction === 'back' ? prevStep() : nextStep();
				}}
			>
				{(props) => (
					<Form className={classes.form}>
						{survey.questions.map((question) => {
							if (question.page === 1) {
								if (question.question_answer_type === 'S') {
									return (
										<div
											key={question.question_id}
											className={classes.formItem}
										>
											<FormLabel className={classes.formItemLabel}>
												{question.question}
											</FormLabel>
											<Field
												name={question.question_id.toString()}
												options={question.available_answers}
												component={FormikRadioGroup}
												className={classes.radioGroup}
											/>
										</div>
									);
								} else if (question.question_answer_type === 'M') {
									return (
										<div key={question.question} className={classes.formSelect}>
											<FormLabel>{question.question}</FormLabel>
											<FormControl
												variant='outlined'
												key={question.question_id}
												className={classes.formSelect}
											>
												<InputLabel
													id={`covid19-travel-exposure-form-question${question.question_id}-labelId`}
												>
													Countries
												</InputLabel>
												<Select
													multiple
													name={question.question_id.toString()}
													labelId={`covid19-travel-exposure-form-question${question.question_id}-labelId`}
													value={props.values[question.question_id.toString()]}
													onChange={(e) => {
														props.setFieldValue(
															question.question_id.toString(),
															e.target.value
														);
													}}
													onBlur={() => {
														props.setFieldTouched(question.question_id, true);
													}}
													label='Countries'
												>
													{question.available_answers.map((answer) => {
														return (
															<MenuItem
																key={answer.answer_id}
																id={answer.answer_id}
																value={answer.answer_id}
															>
																{answer.answer}
															</MenuItem>
														);
													})}
												</Select>
											</FormControl>
										</div>
									);
								}
							}
						})}
						<div className={classes.btnGroup}>
							{/* <Button
								type='submit'
								variant='outlined'
								color='primary'
								className={classes.button}
								onClick={() => setDirection('back')}
							>
								Back
							</Button> */}
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
				)}
			</Formik>
		</>
	);
};

export default connect(mapStateToProps, {})(FormTravelAndExposure);
