import { withPrivate } from '../../../components/hoc/withPrivate';
import MainLayout from '../../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const HealthMetrics = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Health Metrics</Typography>
		</MainLayout>
	);
};

export default withPrivate(HealthMetrics);
