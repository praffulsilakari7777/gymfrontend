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
        {
            fullname: {
                value: '',
                isValid: false
            },
            phonenumber: {
                value: '',
                isValid: false
            },
            email: {
                value: null,
                isValid: false
            },
            address: {
                value: null,
                isValid: false
            },
        }, 
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
       await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/addmember`, 'POST', JSON.stringify({
           fullname: formState.inputs.fullname.value,
           gender: value,
           phonenumber: formState.inputs.phonenumber.value,
           email: formState.inputs.email.value,
           address: formState.inputs.address.value,
           dateofjoining: formState.inputs.dateofjoining.value,
           dateofbirth: formState.inputs.dateofbirth.value,
           weight: formState.inputs.weight.value,
           registrationfee: formState.inputs.registrationfee.value,
          //  trainingtype: formState.inputs.trainingtype.value,
          //  package: currency
    }), {
        'Content-Type': 'application/json'
    });

// Redirect the  user to a different page

history.push(`/members`);
window.location.reload(false);


} catch (err) {}
   
};



    return(  
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        <pre> </pre>
        {isLoading && <LoadingSpinner className="center" asOverlay />}
    <form className="place-form relative bg-white w-full mb-6 shadow-lg rounded"  onSubmit={chapterSubmitHandler}>
       
        <h3 className="center"><FaAddressCard /> &nbsp;&nbsp; Add Member</h3>
        
        <div className="row mb-3">
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
      </div>
        <div className="row">
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
        id="dateofbirth"
        element="date" 
        type="datedatetime-local" 
        label="Date of Birth" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid date." 
        onInput={InputHandler}
        />
        </div>
        </div>


       <div className="row">
      {/* <FormLabel component="label">Gender</FormLabel> */}
      <div className="col-sm">
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
         
        <FormControlLabel value="female" control={<Radio />} label="Female" />
       
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        
        </div>
       
        <div className="col-sm">
        <Input 
        id="address"
        element="input" 
        type="text" 
        label="Address" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Address." 
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

     <div className="row">
         <div className="col-sm">
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
        <div className="col-sm">
        <Input 
        id="weight"
        element="input" 
        type="text" 
        label="Weight" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Address." 
        onInput={InputHandler}
        />
          </div>


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

        </div>


        <div className="row">
         <div className="col-sm">
         <Input 
        id="registrationfee"
        element="input" 
        type="text" 
        label="Registration Fee Paid" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid date." 
        onInput={InputHandler}
        />
        </div>
        <div className="col-sm">
       
          </div>
          </div>
        

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