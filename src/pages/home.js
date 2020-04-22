import { withPrivate } from '../components/hoc/withPrivate';
import MainLayout from '../components/MainLayout';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getProfile } from '../stores/profile/ProfileActions';

const Home = ({ getProfile }) => {
	useEffect(() => {
		getProfile();
	}, []);

	return (
		<MainLayout>
			<Typography variant='h3'>Home</Typography>
		</MainLayout>
	);
};

export default compose(
	withPrivate,
	connect((state) => state, { getProfile })
)(Home);
