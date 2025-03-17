import { Box, Button, Grid2 } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../control/cartSlice";
import { CourseItem } from "../couseItem";
import CourseItemView from "./CourseItemView";





export default function CourseList() {
    const dispatch= useDispatch();
     const {cartItems ,total,quantity} = useSelector((store:{cart:{cartItems:[],total:number,quantity:number}})=>store.cart);

  return (
   <>
   {quantity<1?(<section>
   <p>Sepetiniz boş</p>
   </section>):( <Box sx={{ flexGrow: 1 }}>
    <Grid2 container spacing={2} sx={{marginTop:10}}>
      {cartItems?.map((item:CourseItem,index:number) => (
        <Grid2 size={{ xs: 12, md: 6, lg:3 }} key={index}  >
        <CourseItemView {...item}  />
        </Grid2>
       
      ))}
      </Grid2>
         <footer>
            <hr />
           <div>
            <h4>Toplam: {total} TL</h4>
           </div>
<Button variant="outlined" onClick={()=>dispatch(clearCart())}>
  Delete
</Button>
         </footer>
    </Box>
 
) }
   </>
  )
}

