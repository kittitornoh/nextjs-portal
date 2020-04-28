import React from 'react';
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
	button: {
		marginTop: theme.spacing(4),
	},
}));

const demographicsValidationSchema = yup.object().shape({
	zipcode: yup
		.string()
		.matches(/^\d{5}(?:[-\s]\d{4})?$/, 'Enter a valid zip code'),
});

const FormDemographics = ({ formData, setFormData, nextStep }) => {
	const classes = useStyles();

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
								value={props.values.dob}
								onChange={(date) => props.setFieldValue('dob', date)}
								maxDate={new Date()}
								format='MM/dd/yyyy'
							/>
						</MuiPickersUtilsProvider>
						<FormControl variant='outlined'>
							<InputLabel id='covid19-registration-form-country-labelId'>
								Country
							</InputLabel>
							<Select
								name='country'
								labelId='covid19-registration-form-country-labelId'
								id='covid19-registration-form-country'
								value={props.values.country}
								onChange={(e) => props.setFieldValue('country', e.target.value)}
								onBlur={() => {
									props.setFieldTouched('country', true);
								}}
								label='Country'
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<FormControl
							variant='outlined'
							disabled={props.values.country.length < 1 ? true : false}
						>
							<InputLabel id='covid19-registration-form-state-labelId'>
								State of Residence
							</InputLabel>
							<Select
								name='state'
								labelId='covid19-registration-form-state-labelId'
								id='covid19-registration-form-state'
								value={props.values.state}
								onChange={(e) => props.setFieldValue('state', e.target.value)}
								onBlur={() => {
									props.setFieldTouched('state', true);
								}}
								label='State of Residence'
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<FormControl
							variant='outlined'
							disabled={props.values.state.length < 1 ? true : false}
						>
							<InputLabel id='covid19-registration-form-county-labelId'>
								County of Residence
							</InputLabel>
							<Select
								name='county'
								labelId='covid19-registration-form-county-labelId'
								id='covid19-registration-form-county'
								value={props.values.county}
								onChange={(e) => props.setFieldValue('county', e.target.value)}
								onBlur={() => {
									props.setFieldTouched('county', true);
								}}
								label='County of Residence'
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<TextField
							id='covid19-registration-form-zipcode'
							label='Zip Code'
							type='text'
							value={props.values.zipcode}
							onChange={(e) => props.setFieldValue('zipcode', e.target.value)}
							onBlur={() => {
								props.setFieldTouched('zipcode', true);
							}}
							helperText={props.touched.zipcode ? props.errors.zipcode : ''}
							error={props.touched.zipcode && Boolean(props.errors.zipcode)}
							variant='outlined'
							fullWidth
						/>
						<FormControl variant='outlined'>
							<InputLabel id='covid19-registration-form-race-labelId'>
								Race
							</InputLabel>
							<Select
								name='race'
								labelId='covid19-registration-form-race-labelId'
								id='covid19-registration-form-race'
								value={props.values.race}
								onChange={(e) => props.setFieldValue('race', e.target.value)}
								onBlur={() => {
									props.setFieldTouched('race', true);
								}}
								label='Race'
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<FormControl variant='outlined'>
							<InputLabel id='covid19-registration-form-gender-labelId'>
								Gender
							</InputLabel>
							<Select
								name='gender'
								labelId='covid19-registration-form-gender-labelId'
								id='covid19-registration-form-gender'
								value={props.values.gender}
								onChange={(e) => props.setFieldValue('gender', e.target.value)}
								onBlur={() => {
									props.setFieldTouched('gender', true);
								}}
								label='Gender'
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<FormControl variant='outlined'>
							<InputLabel id='covid19-registration-form-ethnicity-labelId'>
								Ethnicity
							</InputLabel>
							<Select
								name='ethnicity'
								labelId='covid19-registration-form-ethnicity-labelId'
								id='covid19-registration-form-ethnicity'
								value={props.values.ethnicity}
								onChange={(e) =>
									props.setFieldValue('ethnicity', e.target.value)
								}
								onBlur={() => {
									props.setFieldTouched('ethnicity', true);
								}}
								label='Ethnicity'
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
						<Button
							type='submit'
							variant='contained'
							color='primary'
							className={classes.button}
						>
							Next
						</Button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default FormDemographics;
