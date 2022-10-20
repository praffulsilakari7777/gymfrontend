import React from 'react';
import AdSense from 'react-adsense';

import ClassItem from './ClassItem';
import Card from '../../shared/components/UIElements/Card';
import './ClassList.css';

const ClassList = props => {
    if(props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                <h2>No users found.</h2>
                </Card>
            </div>
        )
    }

    let keywords='Ncert Books for';
    {props.items.map(function(item) {
      keywords+=', Class ';
keywords+=item.classNo;
})};

    return (
       
    <ul className="user-list">
        
           {props.items.map(Class => (
           <ClassItem 
           key={Class.id} 
           id={Class._id} 
           image={Class.image}
           classNo={Class.classNo} 
           subjectsCount={Class.subjects.length} 
           keywords={keywords}
           />
           ))}
    </ul>
    );
};

export default ClassList;