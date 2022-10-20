import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
import  PDFViewer from 'pdf-viewer-reactjs';
import { Player } from 'video-react';
import "node_modules/video-react/dist/video-react.css";


const PDF = () => {
    const [loadedPlaces, setLoadedPlaces] = useState();
   
   const userId = useParams().userId;

   


 return( 
     <React.Fragment>
    <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            }}
        />
        <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
        </React.Fragment>
 );
};

export default PDF;