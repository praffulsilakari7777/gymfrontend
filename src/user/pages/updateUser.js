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
// import MenuItem from '@material-ui/core/MenuItem';

const UpdateChapter = () => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [loadedPlace, setLoadedPlace] = useState();
    const userId = useParams().uid;
    const history = useHistory();


    const [formState, inputHandler, setFormData] = useForm(
        {
            role: {
                value: '',
                isValid: false
            }        },
        false
    );


    const option = [
        {
          value: 'none',
          label: 'No access',
        },
        {
          value: 'employee',
          label: 'Employee Access',
        },
        {
            value: 'admin',
            label: 'Admin Access',
          }
      ];


      const [currency, setCurrency] = React.useState('none');
  
      const handleChange1 = (event) => {
        // setCurrency(event.target.value);
        setCurrency(event.target.value)
        console.log(currency);
      };
    





const color="light";
    const placeUpdateSubmitHandler = async event => {
        event.preventDefault();
      try {
          await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users/updateUser/${userId}`, 'PATCH', JSON.stringify({
            role: currency,
          
            
        }), {
            'Content-Type': 'application/json'
        });

        // const pageData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/pages/${loadedPlace.pageId}`);
        // const url=pageData.Page.heading+'-'+loadedPlace.pageId;
      history.push(`/users/`);
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


    
  

   


// console.log(loadedPlace[0].fullname)
    return (
    <React.Fragment>
    <ErrorModal error={error} onClear={clearError} />
    { !isLoading  && 


<form className="place-form relative bg-white w-full mb-6 shadow-lg rounded"  onSubmit={placeUpdateSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}

        <div className="row relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                  className={
                    "font-semibold text-lg " +
                    (color === "light" ? "text-blueGray-700" : "text-white")
                  }
                >
                Edit User's Role
                </h3>
  
              </div>
            
        {/* // <h3 className="center"><FaAddressCard /> &nbsp;&nbsp; Edit User's Role</h3> */}
        
        
        
     
        {/* <div className="lg">
        <Input 
        id="role"
        element="input" 
        type="text" 
        label="Users Role" 
        validators={[VALIDATOR_MINLENGTH(1)]} 
        errorText="Please enter a valid user's role." 
        onInput={inputHandler}
        />
        </div> */}


<TextField
          id="role"
          select
          label="Role"
          value={currency}
          onChange={handleChange1}
          variant="outlined"
          margin="dense"
          fullWidth="true"
        >

      
{option.map((Option) => (
            <MenuItem key={Option.label} value={Option.value}>
              {Option.label} 
            </MenuItem>
          ))}

        </TextField>

      <pre></pre>
      <Button variant="outlined" type="submit" >Submit</Button>
        {/* <Button >Add Member</Button> */}
    </form>

}
    </React.Fragment>
    );
        
};

export default UpdateChapter;