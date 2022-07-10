import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "../modules/FullInput.module.css";

type FullInputPropsType = {
   callBack: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {

   let [title, setTitle] = useState('')
   let [error, setError] = useState<string|null>(null)

   const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         addTaskHandler()
      }
   }

   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setError(null)
      setTitle(event.currentTarget.value)
   }

   const addTaskHandler = () => {
      if (title.trim() !== '') {
         props.callBack(title.trim())
         setTitle('')
      } else {
         setError('Title is reguired!')
      }
   }

   return (
      <div className={s.FullInput}>
         <input
            className={error ? s.error : ''}
            value={title}
            onKeyPress={onKeyPressHandler}
            onChange={onChangeHandler}/>
         <button onClick={addTaskHandler}>+</button>
         {error &&<div className={s.errorMessage}>{error}</div>}
      </div>
   );
};
