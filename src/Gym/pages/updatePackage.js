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
    const paId = useParams().paid;
    const history = useHistory();


    const [formState, inputHandler, setFormData] = useForm(
        {
            packagename: {
                value: '',
                isValid: false
            },
            totalamount : {
                value: '',
                isValid: false
            },
            month : {
                value: '',
                isValid: false
            },
            packagedescription: {
                value: '',
                isValid: false
            }
        },
        false
    );

   useEffect(() => {
       const fetchPlace = async () => {
           try {
          const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/packagebyid/${paId}`);
         
          setLoadedPlace(responseData.Package);
          setFormData({
            packagename: {
                value: responseData.Package.packagename,
                isValid: true
            },
            totalamount: {
                value: responseData.Package.totalamount,
                isValid: true
            },
            month: {
                value: responseData.Package.month,
                isValid: true
            },
            packagedescription: {
                value: responseData.Package.packagedescription,
                isValid: true
            }

        }, true
        );
           } catch (err) {}
       } 
       fetchPlace();
   } , [sendRequest, paId, setFormData]);
   
    
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
          await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/gym/updatepackage/${paId}`, 'PATCH', JSON.stringify({
            packagedescription: formState.inputs.packagedescription.value,
            packagename: formState.inputs.packagename.value,
            month: formState.inputs.month.value,
            totalamount: formState.inputs.totalamount.value,

           
            
        }), {
            'Content-Type': 'application/json'
        });

        // const pageData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/${loadedPlace.pageId}`);
        // const url=pageData.Page.heading+'-'+loadedPlace.pageId;
      history.push(`/addpackage/`);
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
        <h2>Could not find package!</h2>
        </Card>
        </div>

        );
    }


// console.log(loadedPlace[0].fullname)
    return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    { !isLoading && loadedPlace && 


<form className="place-form relative bg-white w-full mb-6 shadow-lg rounded"  onSubmit={placeUpdateSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <h3 className="center"><FaAddressCard /> &nbsp;&nbsp; Edit Member's Detail</h3>
        
        <div className="row mb-3">
        <div className="col-md-6">
        <Input 
        id="packagename"
        element="input" 
        type="text" 
        label={loadedPlace.packagename}
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid Name." 
        onInput={inputHandler}
        initialValue={loadedPlace[0].packagename}
        initialValid={true}
        />
        </div>
        <div className="col-md-6">
        <Input 
        id="month"
        element="input" 
        type="number" 
        label="Month" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid month." 
        onInput={inputHandler}
        initialValue={loadedPlace[0].month}
        initialValid={true}
        />
      </div>
      </div>
        <div className="row">
        <div className="col-md-6">
        <Input 
        id="totalamount"
        element="input" 
        type="text" 
        label="Total Amount" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid email." 
        onInput={inputHandler}
        initialValue={loadedPlace[0].totalamount}
        initialValid={true}
        />
     
        </div>
        <div className="col-md-6">
        <Input 
        id="packagedescription"
        element="input" 
        type="test" 
        label="Package Description" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid package description." 
        onInput={inputHandler}
        initialValue={loadedPlace[0].packagedescription}
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