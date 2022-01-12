import React from "react";

export const FirstPage = () => {
    return(
        // <div className="FirstPage">
        //   <h1>"A BIG BUISNESS STARTS SMALL" </h1>
        //   <p>We Deal In All Kind of Industrial Pallets,Crates & Bins</p>
        //   <button> LEARN MORE</button>
         
        // </div>

        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-sm-12 col-md-6">
            <h1 className="row justify-content-xl-center Main_Head">"A BIG BUISNESS STARTS SMALL" </h1>
            <p className="main-para">We Deal In All Kind of Industrial Pallets,Crates & Bins</p>
           <button className="main-btn">
               LEARN MORE
           </button>
         
            </div>
            <div class="col-sm-12 col-md-6">
            <img src="./img/1.png" class="img-fluid " alt="Responsive image" />
            </div>
          </div>
        </div>

    )
}