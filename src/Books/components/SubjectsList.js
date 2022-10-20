import React, { useContext } from 'react';
import AdSense from 'react-adsense';

import Button from '../../shared/components/FormElements/Button';
import SubjectItem from './SubjectItem';
import Card from '../../shared/components/UIElements/Card';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';
import './ClassList.css';

const SubjectsList = props => {

    const auth = useContext(AuthContext);
    if(props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                <h2>No Subject found.</h2>
                </Card>
            </div>
        )
    }

    let keywords='Ncert';
    {props.items.map(function(item) {
      keywords+=', ';
keywords+=item.subjectName;
})};

    return (
       <React.Fragment>
    <ul className="user-list">
           {props.items.map(Subject => (
           <SubjectItem 
           key={Subject.id} 
           id={Subject._id} 
           subjectName={Subject.subjectName} 
           image={Subject.image}
           chaptersCount={Subject.chapters.length} 
           keywords={keywords}
           />
           ))}
    </ul>
  
    </React.Fragment>
    );
};

export default SubjectsList;