import React from 'react';

type ModalWindowPropsType={
   name:string
}

export const ModalWindow:React.FC<ModalWindowPropsType> = ({name, children}) => {
   return (
      <div>
         <h1>{name}</h1>
         {children}
         <button>Yes</button>
         <button>No</button>
      </div>
   );
};

//это основа модального окна, которую можно использовать везде