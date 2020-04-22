import React from 'react';
import { connect } from 'react-redux';
import MainTable from '../table/MainTable';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const mapStateToProps = (state, ownProps) => ({
	profile: state.profile.profile,
});

const DocumentsPageContent = ({ profile }) => {
	console.log(profile);
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant='h2'>Documents</Typography>
			</Grid>
			<Grid item xs={12}>
				<MainTable />
			</Grid>
		</Grid>
	);
};

export default connect(mapStateToProps, null)(DocumentsPageContent);
