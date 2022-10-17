import React from "react";
import "./Footer.css";

const google = (
  <svg viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z" />
  </svg>
);
const apple = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22.773 22.773"
    width="24"
  >
    <g>
      <g>
        <path
          d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
       c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
        />
        <path
          d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
       c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
       c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
       c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
       c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
       c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
        />
      </g>
    </g>
  </svg>
);

const DownloadApp = () => {
  return (
    <div className="download-btns">
      <div className="google-play-btn download-btn">
        {google}
        <div className="btn-cta">
          <p>GET IT ON</p>
          <p className="google-play">Google Play</p>
        </div>
      </div>
      <div className="app-store-btn download-btn">
        {apple}
        <div className="btn-cta">
          <p>Download on the</p>
          <p className="app-store">App Store</p>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
