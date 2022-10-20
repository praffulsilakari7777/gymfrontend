import React, { useContext } from 'react';
import AdSense from 'react-adsense';

import Button from '../../shared/components/FormElements/Button';
import MemberItem from './MemberItem';
import Card from '../../shared/components/UIElements/Card';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';
// import './ClassList.css';

const SubjectsList = props => {

    const auth = useContext(AuthContext);
    if(props.items.length === 0) {
        return (
            <div >
                <Card>
                <h2>No Subject found.</h2>
                </Card>
            </div>
        )
    }
console.log(props.items);

    return (
       <React.Fragment>
    <ul >

           {props.items.map(Class => (
           <MemberItem 
           key={Class.id} 
           id={Class._id} 
           fullname={Class.fullname}
           gender={Class.gender}
           email={Class.email}
           phonenumber={Class.phonenumber}
           dateofjoining={Class.dateofjoining}
           dateofbirth={Class.dateofbirth} 
           address={Class.address}
           trainingtype={Class.trainingtype}
           expirydate={Class.expirydate}
           packages={Class.packages}
           transaction={Class.transaction}
           weight={Class.weight}
           registrationfee={Class.registrationfee}
           registrationfeestatus={Class.registrationfeestatus}
           discount={Class.discount}
           />
            ))} 
    </ul>
  
    </React.Fragment>
    );
};

export default SubjectsList;