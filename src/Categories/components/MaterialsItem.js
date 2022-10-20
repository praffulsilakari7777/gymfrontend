import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

import Avatar from '../../shared/components/UIElements/Avatar';

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

var str = props.fileName;
str = str.replace(/\s+/g, '-').toLowerCase();
console.log(str);

let url=str+'-'+props.id;

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
        {/* <HelmetProvider>
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
         </HelmetProvider> */}
    
    
    <div className="user-item">
        
        <Card className="user-item__content">
        <Link to={`/pdfmat/${url}`}>
        <div className="user-item__info">
       {/* <b> <h3><Typography gutterBottom variant="body2">{props.fileName}</Typography></h3></b> */}
       <h1><b><Typography  variant="body1" color="textPrimary" component="h3">{props.fileName}</Typography></b></h1>
        {/* <Typography variant="body2" gutterBottom>{props.filesCount} {props.filesCount === 1 ? 'file' : 'files'} */}
        {/* </Typography> */}

        </div>
        <div className="user-item__imageL">
            <Avatar image={`https://icons.iconarchive.com/icons/martz90/circle/256/adobe-reader-icon.png`} alt={props.fileName} />
        </div>
    </Link>

    </Card>
   
    </div>
    {/* { auth.role === 'admin'  &&  (<div className="user-item1">
        <Link to={`/books/updatesubject/${props.id}`}><button className="button">Edit</button></Link>
           <button className="button" danger onClick={handleClickOpen1}>Delete</button>
            </div>)} */}

    </React.Fragment>
    );
};

export default ChapterItem;


