/**
 * Landing page
 */
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import NextLink from '../../_utils/Link';
import LogInForm from './login/LogInForm';

const useStyles = makeStyles(theme => ({
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
	footer: {
		display: 'flex',
		width: '100%',
		alignItems: 'flex-end',
		justifyContent: 'center',

		'& .MuiLink-root': {
			paddingLeft: theme.spacing(1)
		}
	}
}));

const LandingPageLogin = props => {
	const classes = useStyles();

	return (
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
			<Typography component='h2' variant='h5' className={classes.ctaSub}>
				Log in
			</Typography>
			<LogInForm />
			<div className={classes.footer}>
				<Typography variant='body2'>Don't have an account?</Typography>
				<Link
					component={NextLink}
					href='/signup'
					variant='subtitle2'
					color='primary'
				>
					Create one
				</Link>
			</div>
		</Grid>
	);
};

export default LandingPageLogin;
