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
import { getStates, getCounties } from '../../../stores/client/ClientActions';

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

const mapStateToProps = (state, ownProps) => ({
	token: state.auth.client_token,
	// countries: state.client.countries,
	states: state.client.states,
	counties: state.client.counties,
});

const demographicsValidationSchema = yup.object().shape({
	postal: yup
		.string()
		.matches(/^\d{5}(?:[-\s]\d{4})?$/, 'Enter a valid zip code'),
});

const FormDemographics = ({
	token,
	countries,
	states,
	counties,
	formData,
	setFormData,
	nextStep,
	getStates,
	getCounties,
}) => {
	const classes = useStyles();

	useEffect(() => {
		//console.log(`${countries[236].id} ${countries[236].name}`);
		//console.log(formData);
	}, []);

	return (
		<>
			<Formik
				initialValues={formData}
				validationSchema={demographicsValidationSchema}
				onSubmit={(values) => {
					setFormData(values);
					nextStep();
				}}
			>
				{(props) => (
					<Form noValidate autoComplete='off' className={classes.form}>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								clearable
								label='Date of Birth'
								placeholder='mm/dd/yyyy'
								inputVariant='outlined'
								value={props.values.date_of_birth}
								onChange={(date) => props.setFieldValue('date_of_birth', date)}
								maxDate={new Date()}
								format='MM/dd/yyyy'
							/>
						</MuiPickersUtilsProvider>
						<FormControl variant='outlined'>
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
								<MenuItem value='asian'>Asian</MenuItem>
								<MenuItem value='black'>Black</MenuItem>
								<MenuItem value='white'>White</MenuItem>
								<MenuItem value='american_indian_alaska_native'>
									American Indian/ Alaska Native
								</MenuItem>
								<MenuItem value='native_hawaiian_other_pacific_islander'>
									Native Hawaiian/ Other Pacific Islander
								</MenuItem>
								<MenuItem value='unknown'>Unknown</MenuItem>
								<MenuItem value='other'>Other</MenuItem>
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
								<MenuItem value='male'>Male</MenuItem>
								<MenuItem value='female'>Female</MenuItem>
								<MenuItem value='other'>Other</MenuItem>
								<MenuItem value='unknown'>Unknown</MenuItem>
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
								<MenuItem value='hispanic_latino'>Hispanic/ Latino</MenuItem>
								<MenuItem value='non_hispanic_latino'>
									Non-Hispanic/ Latino
								</MenuItem>
								<MenuItem value='not_specified'>Not Specified</MenuItem>
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
})(FormDemographics);
