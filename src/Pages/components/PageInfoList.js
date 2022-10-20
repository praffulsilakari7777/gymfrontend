import React from 'react';
import AdSense from 'react-adsense';

import PageInfoItem from './PageInfoItem';
import Card from '../../shared/components/UIElements/Card';
import './ClassList.css';
import Footer from '../../web-site/footer';
import {Helmet, HelmetProvider} from 'react-helmet-async';

const ClassList = props => {
  

//     let keywords='Ncert Books for';
//     {props.items.map(function(item) {
//       keywords+=', Class ';
// keywords+=item.classNo;
// })};
console.log(props.items);
if(props.items.length === 0) {
  return (
      <div className="center">
          <Card>
          <h2>No Subject found.</h2>
          </Card>
      </div>
  )
}


    return (
       <React.Fragment>
            {props.items.map(Class => (
            <HelmetProvider>
        <Helmet>
        <title>{Class.title}</title>
       
        <meta
          name="description"
          content={Class.metaDescription}
                  />
         </Helmet>
         </HelmetProvider>
           ))}
            <div className="page-section1">
             {/* <div class="container1"> */}
            
              <div className="row">
              
              <div class="row justify-content-center">
            
    <ul >
        
    {props.items.map(Class => (
           <PageInfoItem 
          
           title={Class.title} 
          
           description = {Class.description} 
         
           />
           ))}
          
    </ul>
    </div></div></div>
  
    </React.Fragment>
    );
};

export default ClassList;