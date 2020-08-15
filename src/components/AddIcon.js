import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.background.paper,
    },
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function FabIntegrationSnackbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
    </React.Fragment>
  );
}