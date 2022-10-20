import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button1 from '@material-ui/core/Button';
import { MdPerson,MdDelete } from 'react-icons/md'
import Typography from '@material-ui/core/Typography';


// import '../pages/AllMembers.css';
import Moment from 'react-moment';

// import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useHttpClient } from '../../shared/hooks/http-hook';




// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Button1 from '@material-ui/core/Button';

const UserItem = props => {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
    
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };

    const confirmDeleteHandler1 =  async () => {
       
      setOpen1(false);
      try {
        await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/deleteUser/${props.id}`, 'DELETE');
        window.location.reload(false);
        props.onDelete(props.id);

       
       
  
     } catch (err) {}

 
  };


    return (
        <>
  
           <Dialog open={open1} onClose={handleClose1} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Do you want to proceed and delete this user?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Please note that it can't be undone thereafter.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button1 onClick={handleClose1} color="primary">
            Disagree
          </Button1>
          <Button1 onClick={confirmDeleteHandler1} color="primary" autoFocus>
            Agree
          </Button1>
        </DialogActions>
      </Dialog>

       
        <tr>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
         
              {props.name} 
         
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
      {props.email}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          
          {props.role}
        </td>

         
       
      

        <td>
        <Link to={`/updateuser/${props.id}`}><button
                className="bg-orange-500 active:bg-amber-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Edit 
              </button></Link>
</td>
<td>
              <button
                className="bg-red-500 active:bg-red-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                type="button" onClick={handleClickOpen1}
              >
                delete
              </button>
        </td>
        
      
      </tr>
      </>
          
    
    
    )
};

export default UserItem;