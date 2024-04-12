import { useState } from "react";
import {createContext } from "react";
import Imagenes from "./../assets/photos.json"


export const NatureContext = createContext()


const NatureProvider = ({children}) => {

    const [imagenes, setImagenes] = useState(Imagenes.photos)

    const like = (id) => {
        setImagenes(i =>
          i.map(photo =>
            photo.id === id ? { ...photo, liked: !photo.liked } : photo
          )
        );
      };

  return (
    <NatureContext.Provider value={{imagenes, like}}>
        {children}
    </NatureContext.Provider>
  )
}

export default NatureProvider