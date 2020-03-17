import { withPrivate } from '../../../components/hoc/withPrivate';
import MainLayout from '../../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Allergies = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Allergies</Typography>
		</MainLayout>
	);
};

export default withPrivate(Allergies);
