import { withPrivate } from '../../components/hoc/withPrivate';
import MainLayout from '../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Provider = () => {
	return (
		<MainLayout role='provider'>
			<Typography variant='h3'>Provider</Typography>
		</MainLayout>
	);
};

export default withPrivate(Provider);
