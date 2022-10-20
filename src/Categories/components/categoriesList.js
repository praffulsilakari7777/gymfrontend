import React from 'react';
import AdSense from 'react-adsense';

import CategoriesItem from './categoriesItem';
import Card from '../../shared/components/UIElements/Card';
import './ClassList.css';
import { Category } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(4),
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
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

    return (
        <React.Fragment>
        <Breadcrumbs aria-label="breadcrumb">
  <StyledBreadcrumb
    component="a"
    href="#"
    label="Categories"
    // icon={<HomeIcon fontSize="small" />}
    onClick={handleClick}
  />
  {/* <StyledBreadcrumb component="a" href="#" label="Catalog" onClick={handleClick} />
  <StyledBreadcrumb
    label="Accessories"
    deleteIcon={<ExpandMoreIcon />}
    onClick={handleClick}
    onDelete={handleClick}
  /> */}
</Breadcrumbs>
    <ul className="user-list">
     
           {props.items.map(Category => (
           <CategoriesItem 
           key={Category.id} 
           id={Category._id} 
           categoryName={Category.categoryName} 
           filesCount={Category.materials.length} 
           />
           ))}
    </ul>
    </React.Fragment>
    );
};

export default ClassList;