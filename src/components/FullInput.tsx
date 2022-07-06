import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type FullInputPropsType={
   callBack:(newTitle: string)=>void
}

export const FullInput = (props:FullInputPropsType) => {

   let [newTitle, setNewTitle] = useState('')

   const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) => {
      if(event.key === 'Enter'){
         addTaskHandler()
      }
   }

   const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
      setNewTitle(event.currentTarget.value)
   }

   const addTaskHandler = () => {
      props.callBack(newTitle)
      setNewTitle('')
   }

   return (
      <div>
         <input
            value={newTitle}
            onKeyPress={onKeyPressHandler}
            onChange={onChangeHandler}/>
         <button onClick={addTaskHandler}>+</button>
      </div>
   );
};
