import React from "react";

type propsButtonType = {
   name: string,
   callBack: () => void,
   // newTitle: string
}

export const Button = (props: propsButtonType) => {

   const onClickHandler = () => {
      props.callBack()
   }

   return (
      <button onClick={onClickHandler}>{props.name}</button>

   );
};