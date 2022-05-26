import React, {ChangeEvent} from 'react';

type CheckBoxPropsType={
   elIsDone:boolean
   elID:string
   callBack:(currentEvent:boolean)=>void
}

export const CheckBox = (props:CheckBoxPropsType) => {
   
   const chackboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
      props.callBack(event.currentTarget.checked)
   }
   
   return (
      <input
         type="checkbox"
         checked={props.elIsDone}
         onChange={chackboxHandler}/>
   );
};