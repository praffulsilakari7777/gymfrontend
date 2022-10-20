// import React from 'react';
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './ClassItem.css';
import {  useHistory } from 'react-router-dom';
import {Helmet, HelmetProvider} from 'react-helmet-async';
import { useHttpClient } from '../../shared/hooks/http-hook';




import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button1 from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

const ClassItem = props => {

    const auth = useContext(AuthContext);
    const user = auth.userId;
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
    var str = props.title;
str = str.replace(/\s+/g, '-').toLowerCase();
console.log(str);

let url=str+'-'+props.id;
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
{/* 
<HelmetProvider>
        <Helmet>
        <title>Ncert Books | Solutions | PDF Downloads For Free | {props.keywords}</title>
        <meta
          name="keywords"
          content={props.keywords}
                  />
        <meta
          name="description"
          content={props.keywords}
                  />
         </Helmet>
         </HelmetProvider> */}


<h1></h1>
        <div>
        {/* <Link to={`/pages/${props.id}/${str}`}> */}
        <Link to={`/${url}`}>
            <Card className="card-page">
            <h1>
</h1>
<h1>

</h1>
           
            {/* <div className="user-item__image">
                <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={`Class ${props.classNo}`} />
            </div> */}
            <div >
            <p className="hh5">Page Title  - {props.title}</p>
            <p className="hh5">Blocks Present - {props.TotalBlocks}</p>
            <p className="hh5">Page Id - {props.id}</p>
            {/*
             <Typography variant="body2" gutterBottom>{12*props.subjectsCount} Books
    </Typography> */}
            </div>
            {/* <div className="user-item__imageL">
                <Avatar image={`https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png`} alt={props.classNo} />
            </div> */}
             { auth.role === 'admin'  &&  (<div className="user-item1">
            <Link to={`/pages/updatepage/${props.id}`}><button className="button">Edit</button></Link>
               <button className="button" danger onClick={handleClickOpen1}>Delete</button>
                </div>)}
      <h1></h1>
      <h1></h1>
        </Card>
        </Link>    
       
        </div>
        </React.Fragment>
    )
};

export default ClassItem;








