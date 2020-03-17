import { withPrivate } from '../../../components/hoc/withPrivate';
import MainLayout from '../../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Labs = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Labs</Typography>
		</MainLayout>
	);
};

export default withPrivate(Labs);
