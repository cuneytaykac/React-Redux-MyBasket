import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux";



export default function ButtonAppBar() {
  //Destructuring Assignment  kullanımı
 const {quantity} = useSelector((state: { cart: { quantity: number } }) => state.cart);
 //const quantity=useSelector((store:{cart:{quantity:number}})=>store.cart.quantity)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sepetim
          </Typography>
          <Typography variant="body1" component="div" >
            Sepetteki Ürün Miktarı: {quantity}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );

}
  