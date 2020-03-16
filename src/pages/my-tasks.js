import { withPrivate } from '../components/hoc/withPrivate';
import MainLayout from '../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const MyTasks = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>My Tasks</Typography>
		</MainLayout>
	);
};

export default withPrivate(MyTasks);
