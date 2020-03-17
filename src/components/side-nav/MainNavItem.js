import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
	nested: {
		paddingLeft: theme.spacing(4)
	}
}));

export default function MainNavItem(props) {
	const classes = useStyles();
	const router = useRouter();

	return (
		<Link
			href={props.href ? props.href : '/test'}
			as={props.as ? props.as : null}
			passHref
		>
			<ListItem
				button
				selected={router.pathname.startsWith(`${props.href}`) ? true : false}
				className={props.nested ? classes.nested : null}
			>
				<ListItemIcon>
					<FontAwesomeIcon icon={props.icon} size='lg' />
				</ListItemIcon>
				<ListItemText primary={props.label} />
			</ListItem>
		</Link>
	);
}
