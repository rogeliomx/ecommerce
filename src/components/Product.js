import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {AddShoppingCart} from '@material-ui/icons';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader

        action={
          <IconButton aria-label="settings">
            50
            <MoreVertIcon />
          </IconButton>
        }
        title="Shoes"
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://s2.r29static.com/bin/entry/ebd/0,675,2000,1050/x,80/1929471/image.jpg%22"
        alt="Nike Shoes"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Running Shoes
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Card">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(4)
        .fill()
        .map((_, i) => (
          <p>&#11088;</p>
        ))}
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         
          <Typography paragraph>
            "Zapatillas de deporte para correr"
          
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
