import Square from "./squar";
const Landing = () => {
    let x=0;
    let arr:number[]=[]
   for(let i=0;i<100;i++){
    arr[i]=x
x++
   };
   
    return ( 
        <div  className="w-full p-10  bg-white grid 
        grid-cols-[repeat(10,40px)]  grid-rows-[repeat(10,40px)] gap-2 " >
        {arr.map(ar=>{
            return  <Square key={ar} id={ar} ></Square>
        })}
        </div>
     );
}
 
export default Landing;