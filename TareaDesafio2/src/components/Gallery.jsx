import { useContext } from "react";
import { NatureContext } from "../context/NatureProvider";
import IconHeart from "./IconHeart";


const Gallery = () => {
  const { imagenes, like } = useContext(NatureContext);

  return (
    <div className="gallery grid-columns-5 p-3">
      {      
      imagenes.map(i => (
        <div className="container" key={i.id}>
        <img  src={i.src.tiny}  onClick={() =>like(i.id)}/>
        {i.liked ? <IconHeart filled={true}/> :  <IconHeart filled={false}/>}
        </div>

      ))
      }     
    </div>
  );
};

export default Gallery;