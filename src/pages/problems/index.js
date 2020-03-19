import { withPrivate } from '../../components/hoc/withPrivate';
import MainLayout from '../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Problems = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Problems</Typography>
		</MainLayout>
	);
};

export default withPrivate(Problems);
