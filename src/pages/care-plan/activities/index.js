import { withPrivate } from '../../../components/hoc/withPrivate';
import MainLayout from '../../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Activities = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Activities</Typography>
		</MainLayout>
	);
};

export default withPrivate(Activities);
