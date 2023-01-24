import React from 'react';

type ButtonPropsType={
   title:string
   callBack:()=>void
}

export const Button = (props:ButtonPropsType) => {
   
   const onClickHandler = () => {
      props.callBack()
   }
   
   return (
      <div>
         <button onClick={onClickHandler}>{props.title}</button>
      </div>
   );
};