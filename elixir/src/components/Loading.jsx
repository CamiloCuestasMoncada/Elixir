import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


const Loading = () => {
  return (
    <div id="loading" className="d-flex justify-content-center align-items-center">
      
        <Loader
          type="Watch"
          color="#a20220"
          height={100}
          width={100}
          timeout={9000} //3 secs
          style={{marginTop: '170px'}}
        />
      
    </div>
  );
};

export default Loading;
