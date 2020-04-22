import MaterialTable from 'material-table';
import React from 'react';
import { TableIcons } from './TableIcons';
import { DOCUMENTS_COL_TITLES } from './TableColumns';

const MainTable = () => {
	const [state, setState] = React.useState({
		columns: DOCUMENTS_COL_TITLES,
		data: [
			{
				name: 'Test Upload 1',
				category: 'documents',
				uploadDate: 'Apr 10, 2020',
			},
		],
	});

	return (
		<MaterialTable
			title=''
			icons={TableIcons}
			columns={state.columns}
			data={state.data}
		/>
	);
};

export default MainTable;
