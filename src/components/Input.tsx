import React, {ChangeEvent, KeyboardEvent} from "react";

type propsInputType = {
   newTitle: string,
   setNewtitle:(newTitle: string)=>void,
   callBack:()=>void
}

export const Input = (props:propsInputType) => {

   const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         props.callBack();
      }
   }

   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      props.setNewtitle(event.currentTarget.value)
   }

   return (
      <div>
         <input value={props.newTitle}
                onKeyPress={onKeyPressHandler}
                onChange={onChangeHandler}
         />
      </div>
   )
}