import { withPrivate } from '../../components/hoc/withPrivate';
import MainLayout from '../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const CareTeam = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Care Team</Typography>
		</MainLayout>
	);
};

export default withPrivate(CareTeam);
