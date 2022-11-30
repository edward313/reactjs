import React, { Fragment } from "react";
import "../Loading/style.css";


function Loading(){
    return(
        <Fragment>
            <div className="containner-loading">
              <div className="spinner">
              <span>Loading...</span>
              <div className="half-spinner"></div>
              </div>
              </div>
        </Fragment>
    )
}; export default Loading;


