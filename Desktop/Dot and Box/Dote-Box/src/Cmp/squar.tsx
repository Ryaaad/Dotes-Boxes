import { Click,test} from "../features/Control";
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";


interface props{
  id:number;
}
const Square:React.FC<props> = (props) => {

  const Dispatch=useDispatch()
  const {square,Turn,player2} = useSelector((state:any)=>state.Control)
  useEffect(() => {
    Dispatch(test(props.id))
  
  }, [square])
 
    return ( 
        <div style={{'background': `${square.square[props.id].bg}`}} className="grid relative" 
        onClick={()=>console.log(player2)  }
        >
          <div  className=" rounded-md justify-self-center absolute translate-y-[-50%] top-[-10%] h-1 w-[40px]
           bg-[#e6e6e6]  cursor-pointer " onClick={(e)=>{ Dispatch(Click([e,props.id,0]))
           } } > </div>

           <div  className=" justify-self-center absolute translate-y-[50%] h-1
          bottom-[-10%] w-[40px] bg-[#e6e6e6] cursor-pointer rounded-md"
          onClick={(e)=> Dispatch(Click([e,props.id,1])) }  > </div>
            
            <div  className=" absolute translate-x-[-50%]  rounded-md
          left-[-10%] h-1 rotate-[90deg] top-[50%] translate-y-[-50%] w-[40px]
           bg-[#e6e6e6] cursor-pointer z-20 " onClick={(e)=> Dispatch(Click([e,props.id,2])) } > </div>

            <div  className=" absolute translate-x-[50%]  rounded-md right-[-10%]
             h-1 rotate-[90deg] top-[50%] translate-y-[-50%] w-[40px]
           bg-[#e6e6e6] cursor-pointer z-20 " onClick={(e)=> Dispatch(Click([e,props.id,3])) }  > </div>
            </div>
     );
}
 
export default Square;