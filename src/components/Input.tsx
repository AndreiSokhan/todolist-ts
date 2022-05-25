import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType={
   title:string
   setTitle:(title:string)=>void
   callBack:()=>void
}

export const Input = (props:InputPropsType) => {

   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      props.setTitle(event.currentTarget.value)
   }

   const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         props.callBack();
      }
   }

   return (
      <input value={props.title}
             onChange={onChangeHandler}
             onKeyPress={onKeyPressHandler}
      />
   );
};