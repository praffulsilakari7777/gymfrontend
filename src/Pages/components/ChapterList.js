import React, { useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import ChapterItem from './ChapterItem';
import Button from '../../shared/components/FormElements/Button';
import {Adsense} from '@ctrl/react-adsense';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';


import './ChapterList.css';

const ChapterList = props => {
  const auth = useContext(AuthContext);

    if (props.items.length === 0) {
      return  (
        <div className="place-list center">
            <Card>
              <h2>No Book found !</h2>
              <Button to="/">Bookmark book</Button>
            </Card>
        </div>
   );
    }
    let keywords='Ncert';
    let descriptionKeywords='Ncert';
    {props.items.map(function(item) {
      keywords+=', ';
keywords+=item.chapterName;
descriptionKeywords+=', ';
descriptionKeywords+=item.description;

})};
    return(
      <React.Fragment>
        <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script></head>
        <h1></h1>
        <text></text>
      <ul className="place-list">
        <text></text>
        <text></text>
       
       
        {props.items.map(chapter => 
        <ChapterItem 
        key={chapter.id} 
        id={chapter._id} 
        image={chapter.image} 
        title={chapter.chapterNumber} 
        description={chapter.description} 
        chapterName={chapter.chapterName} 
        creatorId={chapter.chapterNumber} 
        chapterLink={chapter.chapterLink}
        keywords={keywords}
        descriptionKeywords={descriptionKeywords}
        />)}
    </ul>
   
      
   
    </React.Fragment>);
};

export default ChapterList;