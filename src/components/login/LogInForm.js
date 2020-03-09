import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Formik } from "formik";
import React, { Component } from "react";
import * as yup from "yup";
import Link from "../../_utility/Link";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Enter your password")
});

// #TODO: implement 'remember my email'
class LogInForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: ""
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
            <Button
              size='small'
              variant='text'
              color='primary'
              style={{ textTransform: "none" }}
              onClick={() => console.log("I forgot my password")} // #TODO: implement forgot pass
            >
              Forgot your password?
            </Button>
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
              variant='contained'
              color='primary'
              style={{ margin: "16px 0" }}
              fullWidth
              component={Link}
              naked
              href='/home'
            >
              Log in
            </Button>
          </form>
        )}
      </Formik>
    );
  }
}

export default LogInForm;
