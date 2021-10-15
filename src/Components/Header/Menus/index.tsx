/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
	createTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';

import Skeleton from '@material-ui/lab/Skeleton';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { useAuth } from '../../../Context/AuthContext';

const drawerWidth = 240;
export default function MenuLeft() {
	const history = useHistory();
	const { darkMode } = useAuth();
	const [wordsFilter, setWordsFilter] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const themeMaterial = createTheme();
	const useStyles = makeStyles(() => ({
		container: {
			width: 350,
		},
		iconsMenu: {},
		appBar: {
			transition: themeMaterial.transitions.create(['margin', 'width'], {
				easing: themeMaterial.transitions.easing.sharp,
				duration: themeMaterial.transitions.duration.leavingScreen,
			}),
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		input: {},
	}));
	const classes = useStyles();

	function handleFilter(e) {
		console.log(e);
	}

	useEffect(() => {
		setIsLoading(false);
	}, []);

	function buildSkeleton(quantity: number): JSX.Element[] {
		const blocks: JSX.Element[] = [];

		for (let i = 0; i < quantity; i += 1) {
			blocks.push(
				<div key={Math.random()} style={{ padding: '0px 15px', marginTop: 10 }}>
					<FormControl className={classes.input} fullWidth>
						<Skeleton
							variant="rect"
							animation="wave"
							width="100%"
							height={48}
							style={{ marginBottom: 1 }}
						/>
					</FormControl>
				</div>
			);
		}
		return blocks;
	}

	if (isLoading) {
		const blocksSkeletonsHeader = buildSkeleton(2);
		const blocksSkeletonsMain = buildSkeleton(12);

		return (
			<List className={classes.container}>
				{blocksSkeletonsHeader.map(item => item)}
				<Divider />
				{blocksSkeletonsMain.map(item => item)}
			</List>
		);
	}

	return (
		<List className={classes.container}>
			<div style={{ padding: '0px 15px', marginTop: 10 }}>
				<FormControl className={classes.input} fullWidth>
					<InputLabel htmlFor="filterMenus">Pesquisar Menus</InputLabel>
					<Input
						value={wordsFilter}
						fullWidth
						id="filterMenus"
						type="text"
						onChange={handleFilter}
						inputProps={{
							autoComplete: 'off',
							autoFocus: true,
						}}
						endAdornment={<SearchIcon />}
					/>
				</FormControl>
			</div>

			<ListItem button onClick={() => history.push('/all/home/')}>
				<ListItemIcon className={classes.iconsMenu}>
					<HomeIcon
						style={{
							fontSize: 20,
						}}
					/>
				</ListItemIcon>
				<ListItemText primary="Home" />
			</ListItem>

			<Divider />
		</List>
	);
}
