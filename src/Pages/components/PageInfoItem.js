import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './ClassItem.css';

import {Helmet, HelmetProvider} from 'react-helmet-async';



import Typography from '@material-ui/core/Typography';

const ClassItem = props => {
    console.log(props.id);
    var str = props.title;
str = str.replace(/\s+/g, '-').toLowerCase();
console.log(str);
    return (
        <React.Fragment>
{/* 
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
         </HelmetProvider> */}

<ul>

        <div>
           
            {/* <div className="user-item__image">
                <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={`Class ${props.classNo}`} />
            </div> */}
            <div >
            <b><Typography  variant="body" color="textPrimary" component="h1">{props.title}</Typography></b>
            <p>{props.description}</p>

            {/* <Typography variant="body2" gutterBottom>{12*props.subjectsCount} Books
    </Typography> */}
            </div>
            {/* <div className="user-item__imageL">
                <Avatar image={`https://cdn.iconscout.com/icon/free/png-256/right-arrow-1438234-1216195.png`} alt={props.classNo} />
            </div> */}
      
      
           
        </div>
        </ul>
        </React.Fragment>
    )
};

export default ClassItem;








