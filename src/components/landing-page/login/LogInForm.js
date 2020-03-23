import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { authenticate } from '../../../stores/auth/AuthActions';

// #TODO: display error on invalid login
const loginValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup.string().required('Enter your password')
});

// #TODO: implement 'remember my email'
const LogInForm = ({ authenticate }) => {
	return (
		<Formik
			initialValues={{
				email: 'khodges@inxitehealth.com', // #TODO: remove saved values
				password: 'khodges123'
				//,rememberEmail: this.props.storedEmail !== "" ? true : false
			}}
			validationSchema={loginValidationSchema}
			onSubmit={values => {
				const user = values;
				authenticate(user);
			}}
		>
			{props => (
				<form noValidate autoComplete='off' onSubmit={props.handleSubmit}>
					<TextField
						id='email'
						label='Email address'
						type='email'
						value={props.values.email} // #TODO: initiate with save email, if saved
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
					<Link
						component='button'
						type='button'
						variant='caption'
						onClick={() => console.log('I forgot my password')} // #TODO: implement forgot pass
					>
						Forgot your password?
					</Link>
					{/* <FormControlLabel
              control={
                <Checkbox
                  id='rememberPass'
                  onChange={props.handleChange}
                  checked={false} // #TODO: fix
                  value={props.values.rememberEmail}
                  color='primary'
                />
              }
              label='Remember my email'
            /> */}
					<Button
						type='submit'
						variant='contained'
						color='primary'
						style={{ margin: '16px 0' }}
						fullWidth
					>
						Log in
					</Button>
				</form>
			)}
		</Formik>
	);
};

export default connect(state => state, { authenticate })(LogInForm);
