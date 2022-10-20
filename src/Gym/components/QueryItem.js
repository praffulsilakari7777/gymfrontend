// import React from 'react';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
// import './ClassItem.css';
import {  useHistory } from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import { useHttpClient } from '../../shared/hooks/http-hook';




import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button1 from '@material-ui/core/Button';
import { MdPerson,MdDelete } from 'react-icons/md'
import Typography from '@material-ui/core/Typography';


import '../pages/AllMembers.css';
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
// import Moment from 'react-moment';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const ClassItem = props => {
  const classes = useStyles();

    const auth = useContext(AuthContext);
    // const user = auth.userId;
    const role = auth.role;

    const history = useHistory();
    

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
            await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/deletepage/${props.id}`, 'DELETE');
            window.location.reload(false);
            props.onDelete(props.id);
  
           
           
      
         } catch (err) {}
  
     
      };




    console.log(props.id);
    

    return (
        <React.Fragment>
           <Dialog open={open1} onClose={handleClose1} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Do you want to proceed and delete this place?"}</DialogTitle>
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
                <Moment date={props.date} format="MMMM D, YYYY hh:mm a "/>  
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  
                  {props.query}
                </td>
 
                 
               
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                {props.phonenumber}
                </td>

         
              
              </tr>




{/*         
            <StyledTableRow key={props.key}>
              <StyledTableCell align="center">{props.packagename} </StyledTableCell>
              <StyledTableCell align="center">{props.totalamount}</StyledTableCell>
              <StyledTableCell align="center">{props.month}</StyledTableCell>
              <StyledTableCell align="center">{props.packagedescription}</StyledTableCell>
           </StyledTableRow> */}
           
      
 
        </React.Fragment>
    )
};

export default ClassItem;








