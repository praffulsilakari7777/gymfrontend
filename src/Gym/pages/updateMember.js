import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
// import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
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
// import Button from '@material-ui/core/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_MAX, VALIDATOR_EXACTLENGTH, VALIDATOR_EMAIL } from '../../shared/util/validators';



const UpdateChapter = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedPlace, setLoadedPlace] = useState();
    const mId = useParams().mid;
    const history = useHistory();


    const [formState, inputHandler, setFormData] = useForm(
        {
            fullname: {
                value: '',
                isValid: false
            },
            email : {
                value: '',
                isValid: false
            },
            phonenumber : {
                value: '',
                isValid: false
            },
            weight: {
                value: '',
                isValid: false
            },
            dateofjoining : {
                value: '',
                isValid: false
            },
            dateofbirth : {
                value: '',
                isValid: false
            },
            address : {
                value: '',
                isValid: false
            }
        },
        false
    );

   useEffect(() => {
       const fetchPlace = async () => {
           try {
          const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/memberbyid/${mId}`);
         
          setLoadedPlace(responseData.Member);
          setFormData({
            fullname: {
                value: responseData.Member.fullname,
                isValid: true
            },
            email: {
                value: responseData.Member.email,
                isValid: true
            },
            phonenumber: {
                value: responseData.Member.phonenumber,
                isValid: true
            },
            weight: {
                value: responseData.Member.weight,
                isValid: true
            },
            address: {
                value: responseData.Member.address,
                isValid: true
            }

        }, true
        );
           } catch (err) {}
       } 
       fetchPlace();
   } , [sendRequest, mId, setFormData]);
   
    
     console.log(loadedPlace);
     
    //  let gen=loadedPlace.gender;
    const [value, setValue] = React.useState('female');
    // setValue(loadedPlace[0].gender)

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const placeUpdateSubmitHandler = async event => {
        event.preventDefault();
      try {
          await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/updatemember/${mId}`, 'PATCH', JSON.stringify({
            fullname: formState.inputs.fullname.value,
            gender: value,
            email: formState.inputs.email.value,
            phonenumber: formState.inputs.phonenumber.value,
            weight: formState.inputs.weight.value,
            dateofbirth: formState.inputs.dateofbirth.value,
            dateofjoining: formState.inputs.dateofjoining.value,
            address: formState.inputs.address.value,
            
        }), {
            'Content-Type': 'application/json'
        });

        // const pageData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/${loadedPlace.pageId}`);
        // const url=pageData.Page.heading+'-'+loadedPlace.pageId;
      history.push(`/gym/${mId}`);
      window.location.reload(false);
    } catch (err) {}
    }


    if(isLoading) {
        return (
            <div className="center">
              <LoadingSpinner />
            </div>
        );
    }
  

    if (!loadedPlace && !error) {
        return (
            <div className="center">
                <Card>
        <h2>Could not find member!</h2>
        </Card>
        </div>

        );
    }


console.log(loadedPlace[0].fullname)
    return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    { !isLoading && loadedPlace && 

//     <form className="place-form" onSubmit={placeUpdateSubmitHandler} > 
//     <h3>Edit Member's Info</h3>
//      <Input 
//         id="fullname"
//         element="input" 
//         type="text" 
//         label="Full Name" 
//         validators={[VALIDATOR_MINLENGTH(1)]} 
//         errorText="Please enter a valid Name." 
//         onInput={inputHandler}
//         initialValue={loadedPlace.fullname}
//         initialValid={true}
//         />

// <Input 
//         id="gender"
//         element="" 
//         type="text" 
//         label="title" 
//         validators={[VALIDATOR_MINLENGTH(1)]} 
//         errorText="Please enter a valid  title." 
//         onInput={inputHandler}
//         initialValue={loadedPlace.title}
//         initialValid={true}
//         />

// <Input 
//         id="description"
//         element="" 
//         type="text" 
//         label="Description" 
//         validators={[VALIDATOR_MINLENGTH(1)]} 
//         errorText="Please enter a valid  description." 
//         onInput={inputHandler}
//         initialValue={loadedPlace.description}
//         initialValid={true}
//         />

// <Input 
//         id="metaDescription"
//         element="" 
//         type="text" 
//         label="meta Description" 
//         validators={[VALIDATOR_MINLENGTH(1)]} 
//         errorText="Please enter a valid  metaDescription." 
//         onInput={inputHandler}
//         initialValue={loadedPlace.metaDescription}
//         initialValid={true}
//         />
//         <Input 
//         id="urlName"
//         element="input" 
//         type="text" 
//         label="Url Name" 
//         validators={[VALIDATOR_MINLENGTH(1)]} 
//         errorText="Please enter a valid url Name." 
//         onInput={inputHandler}
//         initialValue={loadedPlace.urlName}
//         initialValid={true}
//         />

// <Input 
//         id="title"
//         element="" 
//         type="text" 
//         label="title" 
//         validators={[VALIDATOR_MINLENGTH(1)]} 
//         errorText="Please enter a valid  title." 
//         onInput={inputHandler}
//         initialValue={loadedPlace.title}
//         initialValid={true}
//         />

// <Input 
//         id="description"
//         element="" 
//         type="text" 
//         label="Description" 
//         validators={[VALIDATOR_MINLENGTH(1)]} 
//         errorText="Please enter a valid  description." 
//         onInput={inputHandler}
//         initialValue={loadedPlace.description}
//         initialValid={true}
//         />

// <Input 
//         id="metaDescription"
//         element="" 
//         type="text" 
//         label="meta Description" 
//         validators={[VALIDATOR_MINLENGTH(1)]} 
//         errorText="Please enter a valid  metaDescription." 
//         onInput={inputHandler}
//         initialValue={loadedPlace.metaDescription}
//         initialValid={true}
//         />
         

//         {/* <input type="file" name="file" onChange={onChangeHandler}/> */}


//       <Button type="submit">
//           UPDATE BLOCK
//       </Button>
//     </form>
<form className="place-form relative bg-white w-full mb-6 shadow-lg rounded"  onSubmit={placeUpdateSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <h3 className="center"><FaAddressCard /> &nbsp;&nbsp; Edit Member's Detail</h3>
        
        <div className="row mb-3">
        <div className="col-md-6">
        <Input 
        id="fullname"
        element="input" 
        type="text" 
        label={loadedPlace.fullname}
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Name." 
        onInput={inputHandler}
        initialValue={loadedPlace[0].fullname}
        initialValid={true}
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
        onInput={inputHandler}
        initialValue={loadedPlace[0].phonenumber}
        initialValid={true}
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
        onInput={inputHandler}
        initialValue={loadedPlace[0].email}
        initialValid={true}
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
        onInput={inputHandler}
        initialValue={loadedPlace[0].dateofbirth}
        initialValid={true}
        />
        </div>
        </div>


       <div className="row">
      
      <div className="col-sm">
      <RadioGroup aria-label="gender" name="gender1" value={value}  initialValue={loadedPlace[0].gender}  initialValid={true} onChange={handleChange}>
         
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
        onInput={inputHandler}
        initialValue={loadedPlace[0].address}
        initialValid={true}
        />
        </div>
        </div>
     

     <div className="row">
         <div className="col-sm">
         <Input 
        id="dateofjoining"
        element="date" 
        type="datedatetime-local" 
        label="Date of Joining" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid date." 
        onInput={inputHandler}
        initialValue={loadedPlace[0].dateofjoining}
        initialValid={true}
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
        onInput={inputHandler}
        initialValue={loadedPlace[0].weight}
        initialValid={true}
        />
          </div>


     

        </div>
        

      <pre></pre>
      <Button variant="outlined" type="submit" disabled={!formState.isValid}>Submit</Button>
        {/* <Button >Add Member</Button> */}
    </form>

}
    </React.Fragment>
    );
        
};

export default UpdateChapter;