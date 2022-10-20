import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './ClassItem.css';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';
import Button from '../../shared/components/FormElements/Button';
//import Button1 from '@material-ui/core/Button';
import { useHttpClient } from '../../shared/hooks/http-hook';


import Typography from '@material-ui/core/Typography';
import {  useHistory } from 'react-router-dom';






import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button1 from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';

import {Helmet, HelmetProvider} from 'react-helmet-async';


const SubjectItem = props => {
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
          await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/books/deleteSubject/${props.id}`, 'DELETE');
          window.location.reload(false);
          props.onDelete(props.id);

         
         
    
       } catch (err) {}

   
    };

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
         </HelmetProvider>


        <div className="user-item">
        
            <Card className="user-item__content">
            <Link to={`/books/chapters/${props.id}`}>
            <div className="user-item__image">
                <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.subjectName} />
            </div>
            <div className="user-item__info">
           <b> <Typography gutterBottom variant="body2">{props.subjectName}</Typography></b>
            <Typography variant="body2" gutterBottom>{props.chaptersCount} {props.chaptersCount === 1 ? 'Chapter' : 'Chapters'}
            </Typography>

            </div>
            <div className="user-item__imageL">
                <Avatar image={`https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png`} alt={props.classNo} />
            </div>
        </Link>
    
        </Card>
       
        </div>
        { auth.role === 'admin'  &&  (<div className="user-item1">
            <Link to={`/books/updatesubject/${props.id}`}><button className="button">Edit</button></Link>
               <button className="button" danger onClick={handleClickOpen1}>Delete</button>
                </div>)}
                </React.Fragment>
    )
};

export default SubjectItem;