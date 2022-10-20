import React, { useContext, useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import MaterialItem from './MaterialsItem';
import Button from '../../shared/components/FormElements/Button';
import {Adsense} from '@ctrl/react-adsense';
import { AuthCotext, AuthContext } from '../../shared/context/auth-context';


import './ChapterList.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CenterFocusStrong } from '@material-ui/icons';
import {  useHistory } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/http-hook';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(4),
    alignContent: CenterFocusStrong,
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


const ChapterList = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [lodedUsers, setLoadedUsers] = useState();
  let p=0;
if(props.items.length !== 0){
p=props.items[0].category;
}
const categoryId =p ;


useEffect(() => {
  const fetchUsers = async () => {

 
    try  {  
      const responseData =  await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/category/getcategorybycategoryid/${categoryId}`);
console.log(responseData);
  
    setLoadedUsers(responseData.Category);
  } catch(err) {}
  };
  fetchUsers();
  }, [sendRequest]);


console.log(lodedUsers);

  const auth = useContext(AuthContext);
  const history = useHistory();
    if (props.items.length === 0) {
      return  (
        <div className="place-list center">
            <Card>
              <h2>No file found !</h2>
              <Button to="/">Bookmark book</Button>
            </Card>
        </div>
   );
    }
//     let keywords='Ncert';
//     let descriptionKeywords='Ncert';
//     {props.items.map(function(item) {
//       keywords+=', ';
// keywords+=item.chapterName;
// descriptionKeywords+=', ';
// descriptionKeywords+=item.description;

// })};

function handleClick(event) {
  event.preventDefault();
  history.push(`/categories`);
  console.info('You clicked a breadcrumb.');
}

console.log();
    return(
      <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        <head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script></head>
        <h1></h1>
        <text></text>
        {lodedUsers && 
        <Breadcrumbs aria-label="breadcrumb">
  <StyledBreadcrumb
    component="a"
    href="http://localhost:3000/categories"
    label="Categories"
    // icon={<HomeIcon fontSize="small" />}
    onClick={handleClick}
  />
  <StyledBreadcrumb component="a" href="#" label={`${lodedUsers.categoryName} - files` } onClick={handleClick} />
  {/* <StyledBreadcrumb
    label="Accessories"
    deleteIcon={<ExpandMoreIcon />}
    onClick={handleClick}
    onDelete={handleClick}
  /> */}
</Breadcrumbs>}
      <ul className="place-list">
        <text></text>
        <text></text>
       
       
        {props.items.map(chapter => 
        <MaterialItem 
        key={chapter.id} 
        id={chapter._id} 
        fileName={chapter.fileName} 
        materialLink={chapter.materialLink} 
        category={chapter.category} 
        />)}
        
    </ul>
   
      
   
    </React.Fragment>);
};

export default ChapterList;