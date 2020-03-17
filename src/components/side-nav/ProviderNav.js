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
	faThLarge,
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
import { useRouter } from 'next/router';

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

// #TODO: implement path constants??
export default function ProviderNav() {
	const classes = useStyles();
	const router = useRouter();

	return (
		<List component='nav' className={classes.root}>
			<MainNavItem href='/provider' icon={faThLarge} label='Dashboard' />
		</List>
	);
}
