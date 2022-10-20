import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 240,
  },
});

const Card1 = () =>
{
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://lh3.googleusercontent.com/proxy/zp5i5fvIGnjh9Pe9_EInJNRCvqmrA-PN82CnyRGwAmKkznsjzGIRbTmOMyZLJhOMhZPyEt_p7lsGwHs2ZNChJcLlK2fVmu4QGFK1ULB5PeTy9HXDHi_HdVJV6G8jFJPe9zHgYyY"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Chemistry
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          The NCERT solutions provided here will enhance the concepts of the students, as well as suggest alternative methods to solve particular problems to the teachers. The target is to direct individuals towards problem solving strategies, rather than solving problems in one prescribed format. The links below provide the detailed solutions for all the Class 12 Chemistry problems.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Card1;
