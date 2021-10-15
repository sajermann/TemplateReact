/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Skeleton } from '@material-ui/lab';
import {
	createTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuLeft from './Menus';
import PerfilWidget from './Perfil';

const drawerWidth = 240;

export default function Header() {
	const [isLoading, setIsLoading] = useState(true);
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const themeMaterial = createTheme();
	const useStyles = makeStyles(() => ({
		root: {
			flexGrow: 1,
			display: 'flex',
		},
		menusLaterais: {
			overflow: 'auto',
			scrollSnapType: 'x mandatory',
			'-webkit-overflow-scrolling': 'touch',
			/* width */
			'&::-webkit-scrollbar': {
				width: '5px',
				height: '5px',
			},
			/* Track */
			'&::-webkit-scrollbar-track': {
				boxShadow: 'inset 0 0 5px grey',
				borderRadius: '10px',
			},
			/* Handle */
			'&::-webkit-scrollbar-thumb': {
				background: themeMaterial.palette.grey[700],
				borderRadius: '10px',
			},
			/* Handle on hover */
			'&::-webkit-scrollbar-thumb:hover': {
				background: themeMaterial.palette.grey[700],
			},
			height: '1000%',
		},
		menuButton: {
			marginRight: themeMaterial.spacing(2),
			color: '#fff',
		},
		title: {
			flexGrow: 1,
		},
		divNotifiAndPerfil: {
			display: 'flex',
		},
		iconPerfil: {
			padding: 0,
			marginLeft: 20,
			color: 'white',
		},
		appBar: {
			transition: themeMaterial.transitions.create(['margin', 'width'], {
				easing: themeMaterial.transitions.easing.sharp,
				duration: themeMaterial.transitions.duration.leavingScreen,
			}),
		},
	}));

	const classes = useStyles();

	useEffect(() => {
		async function load() {
			setIsLoading(false);
		}
		load();
	}, []);

	const toggleDrawer = (anchor, open) => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		)
			return;

		if (event.type === 'keydown') return;
		setState({ ...state, [anchor]: open });
	};

	const list = anchor => (
		<div
			className={classes.menusLaterais}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			{anchor === 'left' ? <MenuLeft /> : <PerfilWidget />}
		</div>
	);

	if (isLoading) {
		return (
			<div className="headerGeral" style={{ marginBottom: 10 }}>
				<CssBaseline />
				<AppBar position="static" className={(classes.appBar, classes.root)}>
					<Toolbar style={{ justifyContent: 'space-between' }}>
						<Skeleton variant="rect" animation="wave" width={18} height={18} />
						<Typography variant="h6" noWrap>
							<div className="nameHeader">
								<Skeleton variant="rect" animation="wave" width={150} />
							</div>
						</Typography>
						<div style={{ display: 'flex' }}>
							<Skeleton
								variant="rect"
								animation="wave"
								width={18}
								height={18}
								style={{ margin: '0 10px' }}
							/>
							<Skeleton
								variant="rect"
								animation="wave"
								width={18}
								height={18}
								style={{ margin: '0 10px' }}
							/>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}

	return (
		<>
			<div className="headerGeral" style={{ marginBottom: 10 }}>
				<CssBaseline />
				<AppBar position="static" className={(classes.appBar, classes.root)}>
					<Toolbar style={{ justifyContent: 'space-between' }}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={toggleDrawer('left', true)}
							edge="start"
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap>
							Título
						</Typography>

						<div className={classes.divNotifiAndPerfil}>
							<IconButton
								onClick={toggleDrawer('right', true)}
								aria-label="perfil"
								className={classes.iconPerfil}
								color="inherit"
							>
								<AccountBoxIcon />
							</IconButton>
						</div>
					</Toolbar>
				</AppBar>
			</div>
			<Drawer
				anchor="left"
				open={state.left}
				onClose={toggleDrawer('left', false)}
			>
				{list('left')}
			</Drawer>
			<Drawer
				anchor="right"
				open={state.right}
				onClose={toggleDrawer('right', false)}
			>
				{list('right')}
			</Drawer>
		</>
	);
}
