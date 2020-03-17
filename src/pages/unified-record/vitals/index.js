import { withPrivate } from '../../../components/hoc/withPrivate';
import MainLayout from '../../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Vitals = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Vitals</Typography>
		</MainLayout>
	);
};

export default withPrivate(Vitals);
