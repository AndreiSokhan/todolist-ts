import React from "react";

type propsButtonType = {
   name: string,
   callBack: (newTitle: string) => void,
   newTitle: string
}

export const Button = (props: propsButtonType) => {

   const onClickHandler = () => {
      props.callBack(props.newTitle)
   }

   return (
      <button onClick={onClickHandler}>{props.name}</button>

   );
};