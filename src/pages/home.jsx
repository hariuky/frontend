import "./../styles/home.css";
import { useEffect } from "react";



function Home() {
    useEffect(() => {
       document.body.style.zoom = "1.0";
        
        document.body.style.overflow = "hidden";
    }, []);

    return (
      <div>
        <div  className="full-screen">
            <img src="./src/assets/fretes.jpg"/>
        </div>
        
      </div>
      
    );
  }
  
  export default Home;
  
