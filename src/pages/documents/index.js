import { withPrivate } from '../../components/hoc/withPrivate';
import MainLayout from '../../components/MainLayout';
import DocumentsPageContent from '../../components/documents-page/DocumentsPageContent';

const Documents = () => {
	return (
		<MainLayout>
			<DocumentsPageContent />
		</MainLayout>
	);
};

export default withPrivate(Documents);
