import { withPrivate } from '../../../components/hoc/withPrivate';
import MainLayout from '../../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Medications = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Medications</Typography>
		</MainLayout>
	);
};

export default withPrivate(Medications);
