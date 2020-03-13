import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import { Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as yup from "yup";
<<<<<<< HEAD
=======
import { authenticate } from "../../stores/auth/authActions";
>>>>>>> feature/redux

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Enter your password")
});

// #TODO: implement 'remember my email'
<<<<<<< HEAD
class LogInForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: "khodges@inxitehealth.com", // #TODO: remove
          password: "khodges123" // #TODO: remove
          //,rememberEmail: this.props.storedEmail !== "" ? true : false
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            {
              /* if (rememberPass) {
              localStorage.setItem("loginEmail", values.email);
            } else {
              localStorage.removeItem("loginEmail");
            } */
            }

            // #TODO: submit to server
            console.log(values);
            setSubmitting(false);
          }, 1000);
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
              helperText={props.touched.email ? props.errors.email : ""}
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
              helperText={props.touched.password ? props.errors.password : ""}
              error={props.touched.password && Boolean(props.errors.password)}
              margin='dense'
              variant='outlined'
              fullWidth
            />
            <Link
              type='button'
              component='button'
              variant='caption'
              color='primary'
              onClick={() => console.log("I forgot my password")} // #TODO: implement forgot pass
            >
              Forgot your password?
            </Link>
            {/* <FormControlLabel
=======
const LogInForm = ({ authenticate }) => {
  return (
    <Formik
      initialValues={{
        email: "khodges@inxitehealth.com", // #TODO: remove saved values
        password: "khodges123"
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
            helperText={props.touched.email ? props.errors.email : ""}
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
            helperText={props.touched.password ? props.errors.password : ""}
            error={props.touched.password && Boolean(props.errors.password)}
            margin='dense'
            variant='outlined'
            fullWidth
          />
          <Link
            component='button'
            type='button'
            variant='caption'
            onClick={() => console.log("I forgot my password")} // #TODO: implement forgot pass
          >
            Forgot your password?
          </Link>
          {/* <FormControlLabel
>>>>>>> feature/redux
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
<<<<<<< HEAD
            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={{ margin: "16px 0" }}
              fullWidth
            >
              Log in
            </Button>
          </form>
        )}
      </Formik>
    );
  }
}
=======
          <Button
            type='submit'
            variant='contained'
            color='primary'
            style={{ margin: "16px 0" }}
            fullWidth
          >
            Log in
          </Button>
        </form>
      )}
    </Formik>
  );
};
>>>>>>> feature/redux

export default connect(state => state, { authenticate })(LogInForm);
