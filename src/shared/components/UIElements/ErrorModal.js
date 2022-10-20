import React from 'react';

import Modal from './Modal';
import Button from '../FormElements/Button';



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button1 from '@material-ui/core/Button';

const ErrorModal = props => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Dialog open={!!props.error} onClose={props.onClear} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Error !"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         {props.error}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button1 onClick={props.onClear} color="primary">
            Close
          </Button1>
          
        </DialogActions>
      </Dialog>
    // <Modal
    //   onCancel={props.onClear}
    //   header="An Error Occurred!"
    //   show={!!props.error}
    //   footer={<Button onClick={props.onClear}>Okay</Button>}
    // >
    //   <p>{props.error}</p>
    // </Modal>
  );
};

export default ErrorModal;
