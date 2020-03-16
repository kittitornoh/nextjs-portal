import { withPrivate } from '../components/hoc/withPrivate';
import MainLayout from '../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Home = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Home</Typography>
		</MainLayout>
	);
};

export default withPrivate(Home);
