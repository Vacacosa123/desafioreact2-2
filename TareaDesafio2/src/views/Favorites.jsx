import { useContext } from "react";
import { NatureContext } from "../context/NatureProvider";


const Favorites = () => {

  const { imagenes, like } = useContext(NatureContext);

  return (
    <>
    <h1>Favorites Pic</h1>
    <div className="gallery grid-columns-5 p-3">
      {     
      imagenes.map((i) => (i.liked?  
        (<div className="container" key={i.id}>
        <img  src={i.src.tiny}  onClick={() =>like(i.id)}/>

        </div>
      ) : null ))}     
    </div>
    </>
  );
};
export default Favorites;
