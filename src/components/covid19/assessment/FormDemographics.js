import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import * as yup from 'yup';
import { connect } from 'react-redux';
import {
	getStates,
	getCounties,
	registerParticipant,
} from '../../../stores/client/ClientActions';
import FormHelperText from '@material-ui/core/FormHelperText';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		maxWidth: 480,
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),

		'& .MuiFormControl-root': {
			marginTop: theme.spacing(3),
		},
	},
	btnGroup: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(2),
		minWidth: 200,
	},
}));

const mapStateToProps = (state) => ({
	token: state.auth.client_token,
	states: state.client.states,
	counties: state.client.counties,
});

const demographicsValidationSchema = yup.object().shape({
	date_of_birth: yup
		.string()
		.required('Please enter your date of birth')
		.nullable(),
	country_id: yup.number().required('Please select a country'),
	postal: yup
		.string()
		.matches(/^\d{5}(?:[-\s]\d{4})?$/, 'Enter a valid zip code'),
});

const FormDemographics = ({
	token,
	countries,
	states,
	counties,
	ethnicity,
	gender,
	race,
	nextStep,
	getStates,
	getCounties,
	participantData,
	setParticipantData,
	registerParticipant,
}) => {
	const classes = useStyles();

	return (
		<>
			<Formik
				initialValues={participantData}
				validationSchema={demographicsValidationSchema}
				onSubmit={(values) => {
					registerParticipant(token, values);
					setParticipantData(values);
					nextStep();
				}}
			>
				{(props) => (
					<Form noValidate autoComplete='off' className={classes.form}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								clearable
								disableFuture
								name='date_of_birth'
								label='Date of Birth'
								placeholder='mm/dd/yyyy'
								inputVariant='outlined'
								value={props.values.date_of_birth}
								onChange={(date) =>
									props.setFieldValue(
										'date_of_birth',
										moment(date).format('YYYY-MM-DD')
									)
								}
								format='MM/dd/yyyy'
								error={
									props.touched.date_of_birth &&
									Boolean(props.errors.date_of_birth)
								}
								helperText={props.errors.date_of_birth}
							/>
						</MuiPickersUtilsProvider>
						<FormControl
							variant='outlined'
							error={
								props.touched.country_id && Boolean(props.errors.country_id)
							}
						>
							<InputLabel id='covid19-registration-form-country-labelId'>
								Country
							</InputLabel>
							<Select
								name='country_id'
								labelId='covid19-registration-form-country-labelId'
								id='covid19-registration-form-country'
								value={props.values.country_id}
								onChange={(e) => {
									props.setFieldValue('country_id', e.target.value);
									getStates(token, e.target.value);
								}}
								onBlur={() => {
									props.setFieldTouched('country_id', true);
								}}
								label='Country'
								defaultValue={countries[236].id}
							>
								{countries.map((country) => {
									return (
										<MenuItem
											key={country.id}
											id={`country_${country.id}`}
											value={country.id}
										>
											{country.name}
										</MenuItem>
									);
								})}
							</Select>
							<FormHelperText>{props.errors.country_id}</FormHelperText>
						</FormControl>
						<FormControl
							variant='outlined'
							disabled={props.values.country_id.length < 1 ? true : false}
						>
							<InputLabel id='covid19-registration-form-state-labelId'>
								State of Residence
							</InputLabel>
							<Select
								name='state_id'
								labelId='covid19-registration-form-state-labelId'
								id='covid19-registration-form-state'
								value={props.values.state_id}
								onChange={(e) => {
									props.setFieldValue('state_id', e.target.value);
									getCounties(token, e.target.value);
								}}
								onBlur={() => {
									props.setFieldTouched('state_id', true);
								}}
								label='State of Residence'
							>
								{states !== null ? (
									states.map((state) => {
										return (
											<MenuItem
												key={state.id}
												id={`state_${state.id}`}
												value={state.id}
											>
												{state.name}
											</MenuItem>
										);
									})
								) : (
									<MenuItem id='other' value='other'>
										Other
									</MenuItem>
								)}
							</Select>
						</FormControl>
						<FormControl
							variant='outlined'
							disabled={props.values.state_id.length < 1 ? true : false}
						>
							<InputLabel id='covid19-registration-form-county-labelId'>
								County of Residence
							</InputLabel>
							<Select
								name='county_id'
								labelId='covid19-registration-form-county-labelId'
								id='covid19-registration-form-county'
								value={props.values.county_id}
								onChange={(e) =>
									props.setFieldValue('county_id', e.target.value)
								}
								onBlur={() => {
									props.setFieldTouched('county_id', true);
								}}
								label='County of Residence'
							>
								{counties !== null ? (
									counties.map((county) => {
										return (
											<MenuItem
												key={county.id}
												id={`county_${county.id}`}
												value={county.id}
											>
												{county.name}
											</MenuItem>
										);
									})
								) : (
									<div>Loading...</div>
								)}
							</Select>
						</FormControl>
						<TextField
							id='covid19-registration-form-postal'
							label='Zip Code'
							type='text'
							name='postal'
							value={props.values.postal}
							onChange={(e) => props.setFieldValue('postal', e.target.value)}
							onBlur={() => {
								props.setFieldTouched('postal', true);
							}}
							helperText={props.touched.postal ? props.errors.postal : ''}
							error={props.touched.postal && Boolean(props.errors.postal)}
							variant='outlined'
							fullWidth
						/>
						<FormControl variant='outlined'>
							<InputLabel id='covid19-registration-form-race-labelId'>
								Race
							</InputLabel>
							<Select
								name='race_id'
								labelId='covid19-registration-form-race-labelId'
								id='covid19-registration-form-race'
								value={props.values.race_id}
								onChange={(e) => props.setFieldValue('race_id', e.target.value)}
								onBlur={() => {
									props.setFieldTouched('race_id', true);
								}}
								label='Race'
							>
								{race !== null ? (
									race.map((option) => {
										return (
											<MenuItem
												key={option.id}
												id={`race_${option.id}`}
												value={option.id}
											>
												{option.race}
											</MenuItem>
										);
									})
								) : (
									<div>Loading...</div>
								)}
							</Select>
						</FormControl>
						<FormControl variant='outlined'>
							<InputLabel id='covid19-registration-form-gender-labelId'>
								Gender
							</InputLabel>
							<Select
								name='gender_id'
								labelId='covid19-registration-form-gender-labelId'
								id='covid19-registration-form-gender'
								value={props.values.gender_id}
								onChange={(e) =>
									props.setFieldValue('gender_id', e.target.value)
								}
								onBlur={() => {
									props.setFieldTouched('gender_id', true);
								}}
								label='Gender'
							>
								{gender !== null ? (
									gender.map((option) => {
										return (
											<MenuItem
												key={option.id}
												id={`gender_${option.id}`}
												value={option.id}
											>
												{option.gender}
											</MenuItem>
										);
									})
								) : (
									<div>Loading...</div>
								)}
							</Select>
						</FormControl>
						<FormControl variant='outlined'>
							<InputLabel id='covid19-registration-form-ethnicity-labelId'>
								Ethnicity
							</InputLabel>
							<Select
								name='ethnicity_id'
								labelId='covid19-registration-form-ethnicity-labelId'
								id='covid19-registration-form-ethnicity'
								value={props.values.ethnicity_id}
								onChange={(e) =>
									props.setFieldValue('ethnicity_id', e.target.value)
								}
								onBlur={() => {
									props.setFieldTouched('ethnicity_id', true);
								}}
								label='Ethnicity'
							>
								{ethnicity !== null ? (
									ethnicity.map((option) => {
										return (
											<MenuItem
												key={option.id}
												id={`gender_${option.id}`}
												value={option.id}
											>
												{option.ethnicity}
											</MenuItem>
										);
									})
								) : (
									<div>Loading...</div>
								)}
							</Select>
						</FormControl>
						<div className={classes.btnGroup}>
							<Button
								type='submit'
								variant='contained'
								color='primary'
								className={classes.button}
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

export default connect(mapStateToProps, {
	getStates,
	getCounties,
	registerParticipant,
})(FormDemographics);
