import React from 'react';
import AdSense from 'react-adsense';

import ClassItem from './ClassItem';
import Card from '../../shared/components/UIElements/Card';
import './ClassList.css';
import Footer from '../../web-site/footer';

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

//     let keywords='Ncert Books for';
//     {props.items.map(function(item) {
//       keywords+=', Class ';
// keywords+=item.classNo;
// })};

    return (
       <React.Fragment>
            
    <ul className="user-list">
        
           {props.items.map(Class => (
           <ClassItem 
           key={Class.id} 
           id={Class._id} 
           urlName={Class.urlName}
           title={Class.title} 
           metaDescription={Class.metaDescription}
           description = {Class.description} 
           TotalBlocks = {Class.blocks.length}
           />
           ))}
    </ul>
    
    {/* <Footer /> */}
    </React.Fragment>
    );
};

export default ClassList;