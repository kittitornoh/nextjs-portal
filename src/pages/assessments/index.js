import { withPrivate } from '../../components/hoc/withPrivate';
import MainLayout from '../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Assessments = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Assessments</Typography>
		</MainLayout>
	);
};

export default withPrivate(Assessments);
