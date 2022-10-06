import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import board from '../data';


const initialState = {
  Turn:true,
  player1:0,
  player2:0,
  score:false,
  square:board,
};

const ControlSlice = createSlice({
  name: 'Control',
  initialState:initialState,
  reducers:{
    Click:(state,action:PayloadAction<[React.MouseEvent<HTMLDivElement, MouseEvent>,number,number]>)=>{
      if(action.payload[2]===0)  state.square.Y[action.payload[1]]={  Clicked:true}
      if(action.payload[2]===1)   state.square.Y[action.payload[1]+10]={  Clicked:true}
      if(action.payload[2]===2) state.square.X[action.payload[1]]={  Clicked:true}
      if(action.payload[2]===3) state.square.X[action.payload[1]+1]={  Clicked:true}

   if(state.Turn) ( action.payload[0].target as HTMLInputElement ).style.backgroundColor='red' 
   else ( action.payload[0].target as HTMLInputElement ).style.backgroundColor='#3F51B5'
  if(!state.score) state.Turn=!state.Turn;
  else state.Turn=state.Turn;
    },
    test:(state,action:PayloadAction<number>)=>{
      if(!state.square.square[action.payload].state){
     if(state.square.X[action.payload+1].Clicked && state.square.X[action.payload].Clicked && 
      state.square.Y[action.payload+10].Clicked &&  state.square.Y[action.payload].Clicked ){
          
        if(!state.Turn) {state.square.square[action.payload].bg='red'; state.player2++ }
        else  {state.square.square[action.payload].bg='#3F51B5';state.player1++ }
        state.square.square[action.payload].state=true
       
       }
       else state.score=false     
      }
   
    }
   }
});

export const {Click,test}= ControlSlice.actions
export default ControlSlice.reducer;