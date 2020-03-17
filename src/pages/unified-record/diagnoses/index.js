import { withPrivate } from '../../../components/hoc/withPrivate';
import MainLayout from '../../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Diagnoses = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Diagnoses</Typography>
		</MainLayout>
	);
};

export default withPrivate(Diagnoses);
