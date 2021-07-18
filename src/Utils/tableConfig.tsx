/* eslint-disable no-unused-vars */
import { forwardRef } from 'react';
// typings are here:
import { Icons } from 'material-table';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AddBox from '@material-ui/icons/AddBox';

const tableIcons: Icons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => (
		<ChevronRight {...props} ref={ref} />
	)),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => (
		<ChevronLeft {...props} ref={ref} />
	)),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
	// PageviewIcon: forwardRef(),
};

export const localization = {
	body: {
		deleteTooltip: 'Excluir',
		editTooltip: 'Editar',
		addTooltip: 'Adicionar',
		emptyDataSourceMessage: 'Nenhum registro para exibir',
		editRow: {
			saveTooltip: 'Salvar',
			cancelTooltip: 'Cancelar',
			deleteText: 'Você tem certeza que deseja deletar esse registro?',
		},
	},
	header: {
		actions: '',
	},
	toolbar: {
		searchTooltip: 'Pesquisar',
		exportTitle: 'Exportar',
		exportAriaLabel: 'Exportar',
		exportName: 'Exportar',
		nRowsSelected: '{0} linha(s) selecionada',
		searchPlaceholder: 'Pesquisar',
	},
	pagination: {
		labelRowsSelect: 'linhas',
		labelDisplayedRows: '{from}-{to} de {count}',
		firstTooltip: 'Primeira página',
		previousTooltip: 'Página anterior',
		nextTooltip: 'Próxima página',
		lastTooltip: 'Última página',
	},
};

export default tableIcons;
