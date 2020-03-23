import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import React from 'react';
//import { connect } from 'react-redux';
import * as yup from 'yup';
//import {} from '../../../stores/auth/AuthActions';

const signupValidationSchema = yup.object().shape({
	first_name: yup.string().required('First name is required'),
	last_name: yup.string().required('Last name is required'),
	email: yup
		.string()
		.email('Email is invalid')
		.required('Email is required'),
	password: yup
		.string()
		.min(6, 'Password must be at least 6 characters')
		.required('Password is required'),
	password_confirmation: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
		.required('Confirm password is required')
});

const SignUpForm = () => {
	return (
		<Formik
			initialValues={{
				first_name: '',
				last_name: '',
				email: '',
				password: '',
				password_confirmation: ''
			}}
			validationSchema={signupValidationSchema}
			onSubmit={values => {
				console.log(values);
			}}
		>
			{props => (
				<form noValidate autoComplete='off' onSubmit={props.handleSubmit}>
					<TextField
						id='first_name'
						label='First name'
						type='text'
						value={props.values.first_name}
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						helperText={props.touched.first_name ? props.errors.first_name : ''}
						error={props.touched.first_name && Boolean(props.errors.first_name)}
						margin='dense'
						variant='outlined'
						fullWidth
					/>
					<TextField
						id='last_name'
						label='Last name'
						type='text'
						value={props.values.last_name}
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						helperText={props.touched.last_name ? props.errors.last_name : ''}
						error={props.touched.last_name && Boolean(props.errors.last_name)}
						margin='dense'
						variant='outlined'
						fullWidth
					/>
					<TextField
						id='email'
						label='Email address'
						type='email'
						value={props.values.email}
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						helperText={props.touched.email ? props.errors.email : ''}
						error={props.touched.email && Boolean(props.errors.email)}
						margin='dense'
						variant='outlined'
						fullWidth
					/>
					<TextField
						id='password'
						label='Password'
						type='password'
						value={props.values.password}
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						helperText={props.touched.password ? props.errors.password : ''}
						error={props.touched.password && Boolean(props.errors.password)}
						margin='dense'
						variant='outlined'
						fullWidth
					/>
					<TextField
						id='password_confirmation'
						label='Password'
						type='password'
						value={props.values.password_confirmation}
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						helperText={
							props.touched.password_confirmation
								? props.errors.password_confirmation
								: ''
						}
						error={
							props.touched.password_confirmation &&
							Boolean(props.errors.password_confirmation)
						}
						margin='dense'
						variant='outlined'
						fullWidth
					/>
					<Button
						type='submit'
						variant='contained'
						color='primary'
						style={{ margin: '16px 0' }}
						fullWidth
					>
						Sign up
					</Button>
				</form>
			)}
		</Formik>
	);
};

//export default connect(state => state, {})(SignUpForm);
export default SignUpForm;
