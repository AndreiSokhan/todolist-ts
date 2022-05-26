import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from '../modules/Input.module.css';

type InputPropsType = {
   title: string
   setTitle: (title: string) => void
   callBack: () => void
   error: string | null
   setError: (error: string | null) => void
}

export const Input = (props: InputPropsType) => {

   const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      props.setError(null)
      props.setTitle(event.currentTarget.value)
   }

   const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         props.callBack();
      }
   }

   return (
      <div>
         {props.error && <div className={style.errorMessage}>{props.error}</div>}
         <input className={props.error ? style.error : ''}
                value={props.title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
         />
      </div>
   );
};

