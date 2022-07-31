import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "../modules/FullInput.module.css";

type FullInputPropsType = {
   callBack: (title: string) => void
}

export const FullInput = ({callBack}: FullInputPropsType) => {

   let [title, setTitle] = useState('')
   let [error, setError] = useState<string | null>(null)

   const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         addTask()
      }
   }

   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setError(null)
      setTitle(event.currentTarget.value)
   }

   const addTask = () => {
      let newTitle = title.trim();
      if (newTitle !== '') {
         callBack(newTitle)
         // props.callBack(title.trim())
         setTitle('')
      } else {
         setError('Title is required!')
      }
   }

   return (
      <div className={s.FullInput}>
         <input
            className={error ? s.error : ''}
            value={title}
            onKeyPress={onKeyPressHandler}
            onChange={onChangeHandler}/>
         <button onClick={addTask}>+</button>
         {error && <div className={s.errorMessage}>{error}</div>}
      </div>
   );
};
