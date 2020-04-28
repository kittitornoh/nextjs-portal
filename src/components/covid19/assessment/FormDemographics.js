import React from 'react';
import { Formik } from 'formik';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { DisplayFormikState } from '../../../_helpers/formikStateDisplay';
import * as yup from 'yup';
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
	},
	button: {},
}));

const validationSchema = yup.object().shape({
	dob: yup.date().nullable(),
});

const FormDemographics = ({ formData, setFormData, nextStep }) => {
	const classes = useStyles();

	return (
		<>
			<Typography variant='h4'>Demographics</Typography>
			<Formik
				initialValues={formData}
				onSubmit={(values) => {
					console.log('submitting');
					setFormData(values);
					nextStep();
				}}
			>
				{(props) => (
					<form noValidate autoComplete='off' className={classes.form}>
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
							<InputLabel id='demo-simple-select-outlined-label'>
								Country
							</InputLabel>
							<Select
								name='country'
								labelId='demo-simple-select-outlined-label'
								id='demo-simple-select-outlined'
								value={props.values.country}
								onChange={(e) => props.setFieldValue('country', e.target.value)}
								onBlur={() => {
									props.setFieldTouched('country', true);
								}}
								label='Country'
							>
								<MenuItem value=''>
									<em>None</em>
								</MenuItem>
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
							Continue
						</Button>
						<DisplayFormikState {...props} />
					</form>
				)}
			</Formik>
		</>
	);
};

export default FormDemographics;
