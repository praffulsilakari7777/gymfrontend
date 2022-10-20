// import React from 'react';
import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
// import './ClassItem.css';
import {  useHistory } from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import { useHttpClient } from '../../shared/hooks/http-hook';
import moment from 'moment';

// import 'bootstrap/dist/css/bootstrap.css';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button1 from '@material-ui/core/Button';
import { MdPerson } from 'react-icons/md'
import Typography from '@material-ui/core/Typography';
import TableDropdown from "./Dropdowns/TableDropdown.js";

import '../pages/AllMembers.css';
import Moment from 'react-moment';
import  '../assets/styles/tailwind.css';
// import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    const color="light";

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




    // console.log(props.id);
    
let expirydate1;
let packagefeestatus="true";
// console.log(props.packages);

{props.packages.map(Links => (
    expirydate1=Links.expirydate,
    packagefeestatus=Links.packagefeestatus
    
  ))}
console.log(expirydate1)
console.log(packagefeestatus)
console.log(props.registrationfeestatus)



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





            {/* <StyledTableRow key={props.key}>
              <StyledTableCell align="center"> <Link to={`/gym/${props.id}/`} styles={TextDecoder="none"}>{props.fullname} </Link> </StyledTableCell>
              <StyledTableCell align="center">{props.gender}</StyledTableCell>
              <StyledTableCell align="center"><Moment date= {props.dateofjoining} format="MMMM-d h:mma"/></StyledTableCell>
              <StyledTableCell align="center">{props.phonenumber}</StyledTableCell>
              <StyledTableCell align="center">{props.expirydate>new Date().toISOString()?<button className="btn btn-success sm">Active</button>:<button className="btn btn-danger sm">In Active</button>}</StyledTableCell>
            </StyledTableRow> */}







         <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  {props.gender==="male"?<img
                    src={require("../assets/img/gymm.jpg")}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>:<img
                  src={require("../assets/img/gymf.jpg")}
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>}{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                     <Link to={`/gym/${props.id}`} className="text-decoration-none"> {props.fullname} </Link>
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              (+91)-{props.phonenumber}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {/* <i className="fas fa-circle text-orange-500 mr-2"></i> */}
                  {props.expirydate===null?(<button
                        className="bg-orange-500 active:bg-amber-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Registered 
                      </button>):props.disabled?<button
                      className="bg-yellow-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Disabled 
                    </button>:(expirydate1>new Date().toISOString()?  <button
                        className="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Active 
                      </button>:
                      <button
                      className="bg-red-500 active:bg-red-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Expired
                    </button>)}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
               <Moment date={expirydate1} format="MMM D, YYYY "/>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {/* <div className="flex items-center">
                    <span className="mr-2">10%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: "60%" }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div> */}
                {/* {(props.registrationfeestatus && packagefeestatus)? "done": "not done"}  */}
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {(props.registrationfeestatus && packagefeestatus)? <div><i className="fas fa-circle text-emerald-500 mr-2"/>Payment Done</div>:  <div><i className="fas fa-circle text-red-500 mr-2"/>Payment pending</div> }
                </td>
                </td>
                {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td> */}
              </tr>
           
      
 
        </React.Fragment>
    )
};

export default ClassItem;








