import React, { useContext, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
// import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_MAX, VALIDATOR_EXACTLENGTH, VALIDATOR_EMAIL } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient }  from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
// import './PlaceForm.css';
import ImageUpload from '../../shared/components/FormElements/imageUpload';
import ImaUpload from '../../shared/components/FormElements/pdfUpload';
import { FaAddressCard } from 'react-icons/fa';
//mport { useParams } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BiRupee } from 'react-icons/bi';

const currencies = [
    {
      value: '6089a90e4cb8a45ad40880c3',
      label: 'One Month Normal',
    },
    {
      value: '6089a90e4cb8a45ad40880c3',
      label: 'One Month personal',
    }
  ];


  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const CreateChapter = () => {


    const memberId = useParams().mid;

  const [lodedUsers, setLoadedUsers] = useState([]);


    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');
  
    const handleChange1 = (event) => {
      // setCurrency(event.target.value);
      setCurrency(event.target.value)
    };

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    

   const [formState, InputHandler] =  useForm(
        {}, 
        false
    );

const history = useHistory();
  


// const [file, setFile] = useState();

// const onChangeHandler = async event => {
//     event.preventDefault();
//     let pickedFile;
//     console.log(event.target.files[0]);
//     pickedFile = event.target.files[0];
//     setFile(pickedFile);

// }


useEffect(() => {
  const fetchUsers = async () => {

 
    try  {  
      const responseData =  await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/allpackages`);

   console.log(responseData);
    setLoadedUsers(responseData.Packages);
  } catch(err) {}
  };
  fetchUsers();
  }, [sendRequest]);


const chapterSubmitHandler = async event => {
    event.preventDefault();
console.log(formState.inputs);
  try {
   

// console.log(formData.urlName);
       await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/addmemberpackage`, 'POST', JSON.stringify({
           mId: memberId,
           startingdate: formState.inputs.dateofjoining.value,
           paId: currency,
           amountpaid:  formState.inputs.amountpaid.value,
           discount:  formState.inputs.discount.value,

    }), {
        'Content-Type': 'application/json'
    });

// Redirect the  user to a different page

history.push(`/gym/${memberId}`);
window.location.reload(false);

} catch (err) {}
   
};



    return(  
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        <pre> </pre>
    <form className="place-form"  onSubmit={chapterSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <h3 className="center"><FaAddressCard /> &nbsp;&nbsp; Add Member's Package</h3>
        
        {/* <div className="row mb-3">
        <div className="col-md-6">
        <Input 
        id="fullname"
        element="input" 
        type="text" 
        label="Full Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Name." 
        onInput={InputHandler}
        />
        </div>
        <div className="col-md-6">
        <Input 
        id="phonenumber"
        element="input" 
        type="number" 
        label="Contact Number" 
        validators={[VALIDATOR_EXACTLENGTH(10)]} 
        errorText="Please enter a valid number." 
        onInput={InputHandler}
        />
</div>
</div> */}

        {/* <div className="row">
        <div className="col-md-6">
        <Input 
        id="email"
        element="input" 
        type="text" 
        label="Email Id" 
        validators={[VALIDATOR_EMAIL()]} 
        errorText="Please enter a valid email." 
        onInput={InputHandler}
        />
     
        </div>
        <div className="col-md-6">
        <Input 
        id="dateofjoining"
        element="date" 
        type="datedatetime-local" 
        label="Date of Joining" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid date." 
        onInput={InputHandler}
        />
        </div>
        </div> */}


       <div className="row">
      {/* <FormLabel component="label">Gender</FormLabel> */}
      <div className="col-sm">
      <Input 
        id="dateofjoining"
        element="date" 
        type="datedatetime-local" 
        label="Starting Date" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid date." 
        onInput={InputHandler}
        />
        
        </div>
       
        <div className="col-sm">
        <TextField
          id="package"
          select
          label="Package"
          value={currency}
          onChange={handleChange1}
          variant="outlined"
          margin="dense"
          fullWidth="true"
        >
    
           {lodedUsers.map((option) => (
            <MenuItem key={option._id} value={option._id}>
              {option.packagename} - (<BiRupee className="fas text-lg text-red-400"/>{option.totalamount})
            </MenuItem>
          ))}
        </TextField>
        </div>
        </div>

        <div className="row">
          <div className="col-sm">
          <Input 
        id="amountpaid"
        element="input" 
        type="text" 
        label="Amount Paid" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid date." 
        onInput={InputHandler}
        />
          </div>
          <div className="col-sm">
          <Input 
        id="discount"
        element="input" 
        type="text" 
        label="Discount" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid date."
        onInput={InputHandler}
        />
          </div>
        </div>

     
    
    
        {/* <Input 
        id="gender"
        element="input" 
        type="text" 
        label="Gender" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid  Gender." 
        onInput={InputHandler}
        /> */}
       

        {/* <Input 
        id="Time"
        element="time" 
        type="time" 
        label="Time" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid date." 
        onInput={InputHandler}
        /> */}

     {/* <div className="row">
         <div className="col-sm">
        <Input 
        id="trainingtype"
        element="input" 
        type="text" 
        label="Training Type" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid trainingtype." 
        onInput={InputHandler}
        />
        </div> */}

        {/* <div className="col-sm">
<TextField
          id="package"
          select
          label="Package"
          value={currency}
          onChange={handleChange1}
          // helperText="Please select package"
          variant="outlined"
          margin="dense"
          fullWidth="true"
        >
        
           {lodedUsers.map((option) => (
            <MenuItem key={option._id} value={option._id}>
              {option.packagename}
            </MenuItem>
          ))}
        </TextField>
        </div> */}

        {/* </div> */}
        

        {/* <input type="file" name="file" onChange={onChangeHandler}/> */}

        {/* <ImageUpload center id="image" onInput={InputHandler} />
        <ImaUpload center id="chapterLink" onInput={InputHandler}/> */}
        {/* <Input 
        id="chapterLink"
        element="input" 
        type="text" 
        label="Chapter Link" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Chapter Link." 
        onInput={InputHandler}
        /> */}
      <pre></pre>
      <Button variant="outlined" type="submit" disabled={!formState.isValid}>Add Member</Button>
        {/* <Button >Add Member</Button> */}
    </form>
    </React.Fragment>
    );
}

export default CreateChapter;