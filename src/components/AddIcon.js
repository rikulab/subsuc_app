import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from 'react-modal';
import SubsucForm from './SubsucForm'

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

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
 }
};

export default function FabIntegrationSnackbar({ state, dispatch }) {
  const classes = useStyles();

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <Fab color="secondary" className={classes.fab}>
          <AddIcon onClick={openModal}/>
        </Fab>
      </div>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => subtitle}>追加フォーム</h2>
          <SubsucForm sate={state} dispatch={dispatch} />
          <button onClick={closeModal} >close</button>
        </Modal>
    </React.Fragment>
  );
}
