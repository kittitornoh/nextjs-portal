import { withPrivate } from '../../components/hoc/withPrivate';
import MainLayout from '../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Appointments = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Appointments</Typography>
		</MainLayout>
	);
};

export default withPrivate(Appointments);
