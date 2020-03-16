import { withPrivate } from '../../components/hoc/withPrivate';
import MainLayout from '../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Messages = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Messages</Typography>
		</MainLayout>
	);
};

export default withPrivate(Messages);
