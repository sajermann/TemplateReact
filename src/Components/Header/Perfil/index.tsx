/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
	createTheme,
	makeStyles,
	ThemeProvider,
} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import Skeleton from '@material-ui/lab/Skeleton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import { useAuth } from '../../../Context/AuthContext';

export default function PerfilComponent() {
	const { darkMode, setDarkMode } = useAuth();
	const history = useHistory();
	const [isLoading, setIsLoading] = useState(true);
	const themeMaterial = createTheme();
	const useStyles = makeStyles(() => ({
		root: {
			flexGrow: 1,
			display: 'flex',
		},
		wrapper: {
			margin: themeMaterial.spacing(1),
			position: 'relative',
		},
		containerCentral: {
			maxWidth: 350,
			margin: 'auto',
		},
		containerFilhos: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'left',
			margin: 10,
		},
		containerFilhoCentral: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			margin: 10,
		},
		containerButtons: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-around',
			margin: 10,
		},
		imgBackground: {
			width: 350,
			height: 250,
			'&.MuiSkeleton-root': {
				width: 350,
				height: 250,
			},
		},
		imgPerfil: {
			'&.MuiAvatar-root, &.MuiSkeleton-root': {
				width: 100,
				height: 100,
				marginTop: -90,
			},
		},
		container: {
			display: 'flex',
			padding: 10,
			margin: 10,
		},
		paper: {
			margin: themeMaterial.spacing(1),
		},
		svg: {
			width: 100,
			height: 100,
		},
		polygon: {
			fill: themeMaterial.palette.common.white,
			stroke: themeMaterial.palette.divider,
			strokeWidth: 1,
		},
		idAndUserName: {
			display: 'flex',
			flexDirection: 'column',
		},
	}));
	const classes = useStyles();

	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return (
			<div className={classes.containerCentral}>
				<div>
					<Skeleton
						className={classes.imgBackground}
						variant="rect"
						animation="wave"
					/>
				</div>
				<div className={classes.containerFilhos}>
					<Skeleton
						className={classes.imgPerfil}
						variant="circle"
						animation="wave"
					/>
				</div>
				<Divider />
				<div className={classes.containerFilhos}>
					<Skeleton
						style={{ width: '100%', height: 40 }}
						variant="rect"
						animation="wave"
					/>
				</div>
				<Divider />
				<div className={classes.containerFilhos}>
					<Skeleton
						style={{ width: '100%', height: 40 }}
						variant="rect"
						animation="wave"
					/>
				</div>
				<div className={classes.containerButtons}>
					<Skeleton
						style={{ width: 103, height: 36, borderRadius: 1 }}
						variant="rect"
						animation="wave"
					/>
					<Skeleton
						style={{ width: 103, height: 36, borderRadius: 1 }}
						variant="rect"
						animation="wave"
					/>
				</div>
			</div>
		);
	}

	return (
		<div className={classes.containerCentral}>
			<div>
				<img
					className={classes.imgBackground}
					src="https://www.significadofacil.com/wp-content/uploads/2019/07/background-1200x900.jpg"
					alt="Cover"
				/>
			</div>
			<div className={classes.containerFilhos}>
				<Avatar
					alt="Name User"
					src="https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png"
					className={classes.imgPerfil}
				/>
			</div>
			<Divider />
			<div className={classes.containerFilhoCentral}>
				<div className={classes.idAndUserName}>
					<span>ID: as151-asae262-asdad-51515-15ada</span>
					<span>Username: usernameDefault</span>
					<span>Name: nameDefault</span>
				</div>

				<IconButton onClick={() => setDarkMode(!darkMode)} aria-label="tema">
					{darkMode ? (
						<Tooltip title="Tema Light" placement="right">
							<Brightness7Icon />
						</Tooltip>
					) : (
						<Tooltip title="Tema Dark" placement="right">
							<Brightness4Icon />
						</Tooltip>
					)}
				</IconButton>
			</div>
			<Divider />
			<div className={classes.containerFilhos}> Biografia</div>
			<div className={classes.containerButtons}>
				<Button
					variant="contained"
					color="primary"
					startIcon={<EditIcon />}
					onClick={() => {
						history.push(`/user/perfil/`);
					}}
				>
					Perfil
				</Button>
				<Button
					variant="contained"
					color="secondary"
					startIcon={<ExitToAppIcon />}
					onClick={() => console.log('Fez Logout')}
				>
					Sair
				</Button>
			</div>
		</div>
	);
}
