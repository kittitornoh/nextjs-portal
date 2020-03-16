import {
	faAllergies,
	faCalendarDay,
	faCheckCircle,
	faClipboard,
	faComments,
	faFileAlt,
	faFlagAlt,
	faFolder,
	faHeartbeat,
	faHeartRate,
	faHomeAlt,
	faHospital,
	faPrescriptionBottle,
	faStethoscope,
	faSyringe,
	faUserFriends,
	faUsers,
	faWalking
} from '@fortawesome/pro-solid-svg-icons';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import MainNavCollapse from './MainNavCollapse';
import MainNavItem from './MainNavItem';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 256,
		backgroundColor: theme.palette.background.paper,
		paddingTop: theme.spacing(8),
		position: 'relative',
		overflow: 'auto',
		maxHeight: '100vh',
		whiteSpace: 'nowrap',
		borderRight: '1px solid rgba(0, 0, 0, 0.12)',

		'& .MuiButtonBase-root': {
			paddingTop: theme.spacing(0.5),
			paddingBottom: theme.spacing(0.5)
		},

		'& .MuiListItemIcon-root': {
			minWidth: '40px'
		},

		'& .MuiButtonBase-root:hover': {
			backgroundColor: theme.palette.primary.light
		},

		'& .MuiListItem-root.Mui-selected': {
			backgroundColor: theme.palette.primary.light,
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: theme.palette.primary.main
			}
		}
	}
}));

export default function MainNav() {
	const classes = useStyles();

	return (
		<List component='nav' className={classes.root}>
			<MainNavItem selected icon={faHomeAlt} label='Home' />
			<MainNavItem icon={faCheckCircle} label='My Tasks' />
			<MainNavItem icon={faComments} label='Messages' />
			<MainNavItem icon={faUsers} label='Care Team' />
			<MainNavItem icon={faFileAlt} label='Assessments' />
			<MainNavItem icon={faFolder} label='Documents' />
			<Divider />
			<MainNavCollapse label='Care Plan'>
				<MainNavItem icon={faCalendarDay} label='Appointments' nested />
				<MainNavItem icon={faStethoscope} label='Problems' nested />
				<MainNavItem icon={faFlagAlt} label='Goals' nested />
				<MainNavItem icon={faPrescriptionBottle} label='Medications' nested />
				<MainNavItem icon={faWalking} label='Activities' nested />
				<MainNavItem icon={faHeartbeat} label='Health Metrics' nested />
			</MainNavCollapse>
			<Divider />
			<MainNavCollapse label='Unified Record'>
				<MainNavItem icon={faClipboard} label='Diagnoses' nested />
				<MainNavItem icon={faAllergies} label='Allergies' nested />
				<MainNavItem icon={faSyringe} label='Immunizations' nested />
				<MainNavItem icon={faHospital} label='Labs' nested />
				<MainNavItem icon={faHeartRate} label='Vitals' nested />
				<MainNavItem icon={faUserFriends} label='Family' nested />
			</MainNavCollapse>
			<Divider />
		</List>
	);
}
