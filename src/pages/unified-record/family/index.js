import { withPrivate } from '../../../components/hoc/withPrivate';
import MainLayout from '../../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Family = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Family</Typography>
		</MainLayout>
	);
};

export default withPrivate(Family);
