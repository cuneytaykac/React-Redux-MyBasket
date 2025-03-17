import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { decrease, deleteById, increase } from '../control/cartSlice';
import { CourseItem } from '../couseItem';

export default function CourseItemView({id,title,price,description,image,quantity}:CourseItem) {
    const dispatch= useDispatch();
  return (
   <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {price} TL
        </Typography>
       
      </CardContent>
     <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={()=>dispatch(increase({id}))}>
    <Button size="small">+</Button>
    <Typography variant="body2" sx={{ display: 'flex', color: 'text.secondary', margin: '0 8px' }}>{quantity}</Typography>
  <Button size="small" onClick={() => dispatch(decrease({ id }))}>-</Button>    

</CardActions>

<Button variant="outlined"color="error" sx={{ margin: '8px 16px' }} onClick={()=>dispatch(deleteById(id))}>
  Delete
</Button>

    </Card>
   
  )
}

