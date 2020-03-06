import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Copyright from "../components/Copyright";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://inxitehealth.com/wp-content/uploads/2019/10/InXite_slide_ALPHA.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: "scaleX(-1)"
  },
  content: {
    margin: theme.spacing(8, 4),
    maxWidth: 380
  },
  cta: {
    marginTop: theme.spacing(4)
  },
  ctaSub: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(2)
  },
  ctaBtn: {
    marginBottom: theme.spacing(2)
  }
}));

const Index = () => {
  const classes = useStyles();

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={5} md={6} className={classes.image} />
      <Grid
        container
        item
        xs={12}
        sm={7}
        md={6}
        component={Paper}
        elevation={6}
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid
          item
          container
          direction='column'
          justify='center'
          alignItems='flex-start'
          className={classes.content}
        >
          <img
            src='/inxite-logo.svg'
            alt='inxite logo'
            height={48}
            className={classes.logo}
          />
          <Typography component='h1' variant='h4' className={classes.cta}>
            Take control of your health data now
          </Typography>
          <Typography component='h2' variant='h6' className={classes.ctaSub}>
            Create a free account today.
          </Typography>
          <Button
            variant='contained'
            color='primary'
            className={classes.ctaBtn}
            fullWidth
          >
            Sign up
          </Button>
          <Button
            variant='outlined'
            color='primary'
            className={classes.ctaBtn}
            fullWidth
          >
            Log in
          </Button>
        </Grid>
        <Copyright />
      </Grid>
    </Grid>
  );
};

export default Index;
