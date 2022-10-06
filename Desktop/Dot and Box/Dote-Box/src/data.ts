const Y=[{
  Clicked:false,
}]
const X=[{
  Clicked:false,
}]
for(let i=1;i<110;i++){
  Y.push({
    Clicked:false,
    })
  X.push({
      Clicked:false,
   })  
}
const board ={
  square:[{
    id:0,
    state:false,
    bg:'#f9f9f9',
  }],
    Y:Y,
    X:X,
  }

for(let i=1;i<100;i++){
board.square.push({
    id:i,
    state:false,
    bg:'#f9f9f9',
  })   
}


export default board