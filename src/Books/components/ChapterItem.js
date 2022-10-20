import React, { useState, useContext, useEffect } from 'react';

import Skeleton from 'react-loading-skeleton';

import Card from '../../shared/components/UIElements/Card';
import Card1 from '../../shared/components/UIElements/Card1';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { useAuth } from '../../shared/hooks/auth-hook';

import './ChapterItem.css';
import { useHistory } from 'react-router-dom';


import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button1 from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';
import {Helmet, HelmetProvider} from 'react-helmet-async';






const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));


const ChapterItem = props => {




    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const classes = useStyles();



    const [open1, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };
    


    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    const [showMap, setShowMap] = useState(false);
    const [UserBooksBoolean, setUserBooksBoolean] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const user = auth.userId;
    const role = auth.role;
    console.log(role);




let ans;
let ans1;
    

   useEffect(() => {
 
     if(user) {
    const userBooksHandler = async () => {
    try {
       
      ans =  await sendRequest(process.env.REACT_APP_BACKEND_URL + `/books/user/userbooks/${props.id}`, 'POST', JSON.stringify({
            user: user
    }), 
    { 'Content-Type': 'application/json' }
    );

   if(ans)
    setUserBooksBoolean(true);
    
} catch (err) {}
    };
    userBooksHandler();
}
  }, [sendRequest], user);
  






    const openMapHandler  = async event => {
        event.preventDefault();
      try {
           await sendRequest(process.env.REACT_APP_BACKEND_URL + `/books/createUserBooks/${props.id}`, 'POST', JSON.stringify({
            user: user
    }), 
    { 'Content-Type': 'application/json' }
    );
    
    // Redirect the  user to a different page
    setShowMap(true);

    } catch (err) {}




        try {
         ans1 =   await sendRequest(process.env.REACT_APP_BACKEND_URL + `/books/user/userbooks/${props.id}`, 'POST', JSON.stringify({
             user: user
     }), 
     { 'Content-Type': 'application/json' }
     );

     if(ans1)
     setUserBooksBoolean(true);
    
    } catch (err) {}

    
       
    };



    const closeMapHandler = () => setShowMap(false);
    
    const showDeleteWarningHandler = () => {
        setShowConfirmModal(true);

    };

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    };

    const confirmDeleteHandler =  async () => {
        setShowConfirmModal(false);
        setOpen(false);
        try {
             await sendRequest(process.env.REACT_APP_BACKEND_URL + `/books/deleteuserbooks/${props.id}`, 'POST', JSON.stringify({
            user: user
        }), 
        { 'Content-Type': 'application/json' }
        );
   
       
        setUserBooksBoolean(false);
        

       } catch (err) {}
   
    };



    
    const confirmDeleteHandler1 =  async () => {
     
      setOpen1(false);
      try {
        await sendRequest(process.env.REACT_APP_BACKEND_URL + `/books/deleteChapter/${props.id}`, 'DELETE');
        window.location.reload(false);
        props.onDelete(props.id);
 
  
     } catch (err) {}
 
  };

//   let Urlkeyword='';
//     {props.items.map(function(item) {
//       Urlkeywords+='-';
// Urlkeywords+=item.chapterName;
// descriptionKeywords+=', ';
// descriptionKeywords+=item.description;

// })};

    return (
    <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        <Dialog open={showMap} onClose={closeMapHandler} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Sucsses"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Book Added to Downloads Sucssfully!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button1 onClick={closeMapHandler} color="primary">
            Close
          </Button1>
        </DialogActions>
      </Dialog>
         {/* <Modal 
         show={showMap} 
         onCancel={closeMapHandler} 
         header={props.address}
         contentClass="place-item__modal-content" 
         footerClass="place-item__modal-actions"
         footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
         >

             <div className="map-container">
                 <h2>Book Added to Downloads Sucssfully!</h2>
             </div>
        </Modal> */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Do you want to proceed and delete this place?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Please note that it can't be undone thereafter.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button1 onClick={handleClose} color="primary">
            Disagree
          </Button1>
          <Button1 onClick={confirmDeleteHandler} color="primary" autoFocus>
            Agree
          </Button1>
        </DialogActions>
      </Dialog>


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


        {/* <Modal
          show={showConfirmModal}
          onCancel={cancelDeleteHandler}
          header="Are You sure?"
          footerClass="place-item__modal-actions" 
          footer={
              <React.Fragment>
                  <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                  <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
              </React.Fragment>
          }
        >
            <p>Do you want to proceed and delete this book?</p>
        </Modal> */}
        <text></text>
        <HelmetProvider>
        <Helmet>
        <title>Ncert Books | Solutions | PDF Downloads For Free | {props.keywords}</title>
        <meta
          name="keywords"
          content={props.keywords}
                  />
        <meta
          name="description"
          content={props.descriptionKeywords}
                  />
         </Helmet>
         </HelmetProvider>
    <li className="place-item">
        <Card className="place-item__content">
            {isLoading && <LoadingSpinner asOverlay />}
             {/* {UserBooksBoolean?<Button danger onClick={showDeleteWarningHandler}>Delete</Button>: <Button inverse onClick={openMapHandler}>Add to Downloads</Button>} */}
             {UserBooksBoolean?<IconButton aria-label="add to favorites" color="primary" size="large">
          <FavoriteIcon onClick={handleClickOpen}  />
        </IconButton>: <IconButton aria-label="add to favorites" color="default" size="large">
          <FavoriteIcon onClick={openMapHandler}  />
        </IconButton>}
        <div className="place-item__image">
          
            <img src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}  alt={props.chapterName} title={props.chapterName} />
        </div>
        <div className="place-item__info">
       <h1><b><Typography  variant="body1" color="textPrimary" component="h3">{props.chapterName}</Typography></b></h1>
        <Typography  variant="body1" color="textPrimary" component="h4">{`Chapter ${props.title}`}</Typography>
        <h1><Typography variant="body2" color="textSecondary" component="p">{props.description}</Typography></h1>
        </div>
        <div className="place-item__actions">
            {/* {UserBooksBoolean?<Button danger onClick={showDeleteWarningHandler}>Delete</Button>: <Button inverse onClick={openMapHandler}>Add to Downloads</Button>}
            {UserBooksBoolean?<IconButton aria-label="add to favorites" color="primary" size="large">
          <FavoriteIcon onClick={handleClickOpen}  />
        </IconButton>: <IconButton aria-label="add to favorites" color="default" size="large">
          <FavoriteIcon onClick={openMapHandler}  />
        </IconButton>} */}
    
            <Button size="small" inverse to={`/pdf/${props.id}`}>View Chapter</Button>
            <Button size="small" inverse to={`/pdfsol/${props.id}`}>View Solution</Button>
            {/* <Button size="small" inverse to={`/pdf/${props.id}`}>Video</Button> */}
            {auth.userId === props.creatorId && <Button to={`/places/${props.id}`}>Edit</Button>}
            { auth.role === 'admin'  && <Button to={`/books/updatechapter/${props.id}`}>Edit</Button>}
            { auth.role === 'admin'  && <Button danger onClick={handleClickOpen1}>Delete</Button>}
            {isLoading && <LoadingSpinner asOverlay />}

           
        </div>
        </Card>
    </li>
    
          
    </React.Fragment>
    );
};

export default ChapterItem;


