import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';
import './Input.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25rem',
        
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        margin: theme.spacing(1),
        width: '25rem',
      },
    },
  }));
  

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
        return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
        };
        case 'TOUCH' : {
            return {
                ...state,
                isTouched: true
            }
        }
        default:
            return state;
    }
}

const Input = props => {

    const classes = useStyles();
 
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '', 
        isTouched: false,
        isValid: props.initialValid || false
    });

    const { id, onInput } = props;
    const { value, isValid } = inputState;


    useEffect(() => {
        onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
     dispatch({
         type: 'CHANGE', 
         val: event.target.value,
         validators: props.validators
        });
    };
    
    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        });
    };
    
  let element;

        switch(props.element) {
            case 'date':element = (
            // <input 
            // id={props.id} 
            // type={props.type} 
            // placeholder={props.placeholder} 
            // onChange={changeHandler} 
            // onBlur={touchHandler}
            // value={inputState.value}
            // className="form-control" 
            // />

            <TextField
            label={props.label} 
            rows={4}
           id={props.id} 
           type="datetime-local"
           placeholder=""
           onChange={changeHandler} 
           onBlur={touchHandler}
           className={classes.textField}
           InputLabelProps={{
             shrink: true,
           }}
           value={inputState.value}
           variant="outlined"
           margin="dense"
           fullWidth="true"
   />
            
            );
            break;

            case 'time': element=( 
            // <input 
            //     id={props.id} 
            //     type={props.type} 
            //     placeholder={props.placeholder} 
            //     onChange={changeHandler} 
            //     onBlur={touchHandler}
            //     value={inputState.value}
            //     className="form-control" 
            //     />

            <TextField
            label={props.label} 
            rows={4}
           id={props.id} 
           type={props.type} 
           placeholder={props.placeholder} 
           onChange={changeHandler} 
           onBlur={touchHandler}
           value={inputState.value}
           className={classes.textField}
   />
                 );

                break;
            case 'input': element=(
                <TextField
                 label={props.label} 
                 rows={4}
                id={props.id} 
                type={props.type} 
                placeholder={props.placeholder} 
                onChange={changeHandler} 
                onBlur={touchHandler}
                value={inputState.value}
                variant="outlined"
                className={classes.textField}
                margin="dense"
                fullWidth="true"
        />
        );

                break;


                case 'radio': element=( <input 
                    id={props.id} 
                    type={props.type} 
                    placeholder={props.placeholder} 
                    onChange={changeHandler} 
                    onBlur={touchHandler}
                    value={inputState.value}
                    className="form-control" 
                    /> );
    
                    break;

            default :element= (
            // <textarea 
            //     id={props.id} 
            //     rows={props.row || 3} 
            //     onChange={changeHandler} 
            //     onBlur={touchHandler}
            //     value={inputState.value}
            //     className="form-control" 
            //     /> 
            <TextField
            label={props.label} 
            rows={4}
           id={props.id} 
           type={props.type} 
           placeholder={props.placeholder} 
           onChange={changeHandler} 
           onBlur={touchHandler}
           value={inputState.value}
           variant="outlined"
           className={classes.textField}
           margin="dense"
           fullWidth="true"
   />
                );
                break;

        }
    
    
    // props.element ==='date' ? 
    //    (<input 
    //     id={props.id} 
    //     type={props.type} 
    //     placeholder={props.placeholder} 
    //     onChange={changeHandler} 
    //     onBlur={touchHandler}
    //     value={inputState.value} 
    //     />) : (
    //                   props.element === 'input' ?  ( 
    //                   <input 
    //                   id={props.id} 
    //                   type={props.type} 
    //                   placeholder={props.placeholder} 
    //                   onChange={changeHandler} 
    //                   onBlur={touchHandler}
    //                   value={inputState.value} 
    //                   /> 
    //                   ) : ( 
    //                   <textarea 
    //                   id={props.id} 
    //                   rows={props.row || 3} 
    //                   onChange={changeHandler} 
    //                   onBlur={touchHandler}
    //                   value={inputState.value} 
    //                   /> 
    //                   )
    // );


    return <div>
               {/* <label htmlFor={props.id} className="form-label">{props.label}</label> */}
               {element}
               {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
           </div>
};

export default Input;