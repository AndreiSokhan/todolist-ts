import React from "react";

type PropsModalWindowType = {
   name: string
}

export const ModalWindow: React.FC<PropsModalWindowType> = ({name, children}) => {
   return (
      <div>
         <h1>{name}</h1>
         {children}
         <button>Yes</button>
         <button>No</button>
      </div>
   );
};