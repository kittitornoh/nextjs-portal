import { withPrivate } from '../../components/hoc/withPrivate';
import MainLayout from '../../components/MainLayout';
import Typography from '@material-ui/core/Typography';

const Documents = () => {
	return (
		<MainLayout>
			<Typography variant='h3'>Documents</Typography>
		</MainLayout>
	);
};

export default withPrivate(Documents);
