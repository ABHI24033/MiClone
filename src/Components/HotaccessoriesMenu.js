import React from 'react';
import {Link}from "react-router-dom"
import "../css/HotaccessoriesMenu.css"
function HotaccessoriesMenu() {
  return (
    <div className='HotaccessoriesMenu'>
      <Link to="/music" className="HotaccessoriesLink">Music Store</Link>
      <Link to="/smart_device" className="HotaccessoriesLink">Smart Devices</Link>
      <Link to="/home" className="HotaccessoriesLink">Home</Link>
      <Link to="/lifestyle" className="HotaccessoriesLink">LifeStyle</Link>
      <Link to="/mobileaccessories" className="HotaccessoriesLink">Mobile Accessories</Link>
    </div>
  );
}

export default HotaccessoriesMenu;
