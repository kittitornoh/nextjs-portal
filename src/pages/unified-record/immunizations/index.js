import { withPrivate } from '../../../components/hoc/withPrivate';
import MainLayout from '../../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Immunizations = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Immunizations</Typography>
		</MainLayout>
	);
};

export default withPrivate(Immunizations);
