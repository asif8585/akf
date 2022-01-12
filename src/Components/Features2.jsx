import React from "react";
import { FaAngellist } from 'react-icons/fa';

export const Features = () => {

    const FCard = () => {
        return(
   <div>
     
       <div id="Fcard" class="col-sm-12 col-md-3">
       
        <div className="fs-1"><FaAngellist/></div>
               <p> Quality is not what happens when what you do matches your intentions.
                It is what happens when what you do matches your customers' expectations. </p>
        </div>
    </div>
        )
    }
  return (
      <div>
       <h1 className="feature-title">FEATURES</h1>
  <FCard/>
  <FCard/>
  <FCard/>
  <FCard/>
  </div>
  );
};
