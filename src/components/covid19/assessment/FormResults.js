import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
	content: {
		width: '100%',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
	},
	cardRoot: {
		minWidth: 480,
		textAlign: 'center',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(4),

		'& .MuiCardContent-root': {
			padding: theme.spacing(2),
		},

		'& .MuiTypography-root': {
			color: '#FFFFFF',
		},
	},
	button: {
		width: 480,
	},
}));

const FormResults = () => {
	const classes = useStyles();

	return (
		<Grid
			container
			spacing={3}
			justify='center'
			direction='column'
			alignItems='center'
			className={classes.content}
		>
			<Grid item>
				<Typography variant='h5'>CDC Risk Assessment Score</Typography>
			</Grid>
			<Grid item>
				<Card className={classes.cardRoot} style={{ backgroundColor: 'green' }}>
					<CardContent>
						<Typography variant='h6'>No Identifiable Risk</Typography>
					</CardContent>
				</Card>
			</Grid>
			{/* #TODO: add list of recommended actions 
			<Grid item container justify='flex-start' style={{ maxWidth: 480 }}>
				<List>
					<ListItem>
						<ListItemText primary='Trash' />
					</ListItem>
					<ListItem>
						<ListItemText primary='Spam' />
					</ListItem>
				</List>
			</Grid> */}
			<Grid item>
				<Button
					type='button'
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={() => {}}
				>
					Request Provider Administered COVID-19 Blood Test
				</Button>
			</Grid>
			<Grid item>
				<Button
					type='button'
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={() => {}}
				>
					Order In-Home COVID-19 Saliva Test Kit
				</Button>
			</Grid>
			<Grid item>
				<Button
					type='button'
					variant='contained'
					color='primary'
					className={classes.button}
					onClick={() => {}}
				>
					Setup TeleHealth Consultation
				</Button>
			</Grid>
			<Grid item>
				<Button
					type='button'
					variant='outlined'
					color='primary'
					className={classes.button}
					onClick={() => Router.push('/')}
				>
					Home
				</Button>
			</Grid>
		</Grid>
	);
};

export default FormResults;
