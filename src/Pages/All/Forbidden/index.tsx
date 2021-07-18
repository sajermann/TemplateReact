/* eslint-disable no-unused-vars */
import { useHistory, useParams, useLocation } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useAuth } from '../../../Context/AuthContext';

export default function Forbidden() {
	const history = useHistory();
	const { user } = useAuth();
	const useStyles = makeStyles(() => ({
		root: {
			flexGrow: 1,
			margin: 10,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			// color: true ? generalTheme.white : generalTheme.darkGray,
		},
		button: {
			margin: 5,
		},
	}));

	const classes = useStyles();

	return (
		<div>
			<div className={classes.root}>
				<h1>Acesso Negado</h1>
				<h2>Você não tem permissão para acessar essa página</h2>
				<div>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						startIcon={<HomeIcon />}
						onClick={() => {
							history.push(`/all/home`);
						}}
					>
						Home
					</Button>
					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
						startIcon={<ExitToAppIcon />}
						// onClick={handleLogout}
					>
						Sair
					</Button>
				</div>
			</div>
		</div>
	);
}
