import { withPrivate } from '../../../components/hoc/withPrivate';
import MainLayout from '../../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Goals = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Goals</Typography>
		</MainLayout>
	);
};

export default withPrivate(Goals);
