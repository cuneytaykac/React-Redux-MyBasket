import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import ButtonAppBar from './components/Appbar'
import CourseList from './components/CourseList'
import { calcutateTotal } from './control/cartSlice'
function App() {
  const dispatch = useDispatch();
 const {cartItems} = useSelector((store:{cart:{cartItems:[]}})=>store.cart);  useEffect(() => {
    dispatch(calcutateTotal());
  }, [cartItems]);
  return (

<div>
  <ButtonAppBar />
  <CourseList/>

</div>
  )
}

export default App
