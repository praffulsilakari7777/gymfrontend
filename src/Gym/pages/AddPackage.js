import React, { useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
// import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_MAX } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient }  from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import '../../places/pages/PlaceForm.css';
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
import { AiOutlineAppstoreAdd } from "react-icons/ai";
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


    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');
  
    const handleChange1 = (event) => {
      setCurrency(event.target.value);
    };

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    

   const [formState, InputHandler] =  useForm(
        {
            packagename: {
                value: '',
                isValid: false
            },
            month: {
                value: '',
                isValid: false
            },
            totalamount: {
                value: null,
                isValid: false
            },
            description: {
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



const chapterSubmitHandler = async event => {
    event.preventDefault();
console.log(formState.inputs);
  try {
   

// console.log(formData.urlName);
       await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/addpackage`, 'POST', JSON.stringify({
           packagename: formState.inputs.packagename.value,
           month: formState.inputs.month.value,
           totalamount: formState.inputs.totalamount.value,
           packagedescription: formState.inputs.description.value,
          
    }), {
        'Content-Type': 'application/json'
    });

// Redirect the  user to a different page

history.push(`/addpackage`);
window.location.reload();

} catch (err) {}
   
};

const color="light";


    return(  
        <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        <pre> </pre>
        
    <form className="place-form relative bg-white w-full mb-6 shadow-lg rounded"  onSubmit={chapterSubmitHandler}>
        {isLoading && <LoadingSpinner className="center" asOverlay />}
        {/* <h3 className="center"><AiOutlineAppstoreAdd /> &nbsp; Add Package</h3> */}
        <div className="row relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
              <AiOutlineAppstoreAdd className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"/>Add Package
              </h3>

            </div>
        
        
        <div className="row mb-3">
        <div className="col-md-6">
        <Input 
        id="packagename"
        element="input" 
        type="text" 
        label="Package Name" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Package Name." 
        onInput={InputHandler}
        />
        </div>
        <div className="col-md-6">
        <Input 
        id="month"
        element="input" 
        type="number" 
        label="Month" 
        validators={[VALIDATOR_MAX(12)]} 
        errorText="Please enter a valid Month (1-12)." 
        onInput={InputHandler}
        />
</div>
</div>

        <div className="row">
        <div className="col-md-6">
       
        <Input 
        id="description"
        element="" 
        type="text" 
        label="Package Description" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a description." 
        onInput={InputHandler}
        />
        </div>
        <div className="col-md-6">
        <Input 
        id="totalamount"
        element="input" 
        type="number" 
        label="Total Amount" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid amount." 
        onInput={InputHandler}
        />
        </div>
        </div>
        <pre></pre>
      <Button variant="outlined" type="submit" disabled={!formState.isValid}>Add Package</Button>
      
        {/* <Button >Add Member</Button> */}
    </form>
    </React.Fragment>
    );
}

export default CreateChapter;