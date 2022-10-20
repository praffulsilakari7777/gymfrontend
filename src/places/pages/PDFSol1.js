import React, { useState, useRef } from 'react';
//import  PDFViewer from 'pdf-viewer-reactjs';
//import { PDFViewer } from 'react-view-pdf';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';
//import { PDFReader } from 'reactjs-pdf-reader';
//import { MobilePDFReader } from 'reactjs-pdf-reader';
//import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
//import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import './PDF1.css';
import { MobilePDFReader } from 'react-read-pdf';

//import { usePdf } from '@mikecousins/react-pdf';
//import Pdf from '@mikecousins/react-pdf';
//import Pdf from 'vue-pdf';






const PDFSol1 = props => {
console.log(props.items.chapterLink);
let urll=props.items.solutionLink;


 return( 
   <div style={{overflow:'scroll',height:600}}>
   <MobilePDFReader url={`${process.env.REACT_APP_ASSET_URL}/${urll}`}/>
  </div>
  
  //  <div >
  //  <iframe className="frame" src={`${process.env.REACT_APP_ASSET_URL}/${urll}`} width="540" height="480"></iframe>
  //  {/* <embed type="application/pdf" src={`http://localhost:5000/${urll}`} width="100%" height="1000px"></embed> */}
  //  {/* </div> */}
  // <div style={{overflow:'scroll',height:600}}>
  //           <MobilePDFReader url={`http://localhost:5000/${urll}/`}/>
  //          </div>
//   <Worker workerUrl="/index.html">
//     <div style={{ height: '750px' }}>
//         <Viewer fileUrl={urll} />
//     </div>
// </Worker>
// {/* <hive-pdf-viewer src={`http://localhost:5000/${urll}`}></hive-pdf-viewer> */}

// {/* <PDFViewer url={`http://localhost:5000/${urll}`} /> */}
// {/* <template>
//   <pdf src={`http://localhost:5000/${urll}`}></pdf>
//   </template>  */}

 );
};

export default PDFSol1;

{/* <Viewer fileUrl={`https://localhost:5000/${urll}`} />

 <div className="wrap">
   <iframe className="frame" src={`http://localhost:5000/${urll}`}></iframe>
   </div>  */}


{/* <PDFViewer style={{ 'height': '640px', 'width': '100%' }}
   document={{
       url: props.items.chapterLink,
   }}
/> */}