import React from 'react';
import HotItemCard from "./HotItemCard.js"
import '../css/Hotaccessories.css';
function Hotaccessories({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessorites,mobileAccessoritesCover}) {
    
  return (
    <div className='Hotaccessories'>
      <div>
        <img src={musicCover||smartDeviceCover||homeCover||lifeStyleCover||mobileAccessoritesCover} alt="cover"/>
      </div>
      <div>
        {music&&music.map((item,index)=>(
            <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index}/>
        ))}
        {smartDevice&&smartDevice.map((item,index)=>(
            <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index}/>
        ))}
        {home&&home.map((item,index)=>(
            <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index}/>
        ))}
        {lifeStyle&&lifeStyle.map((item,index)=>(
            <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index}/>
        ))}
        {mobileAccessorites&&mobileAccessorites.map((item,index)=>(
            <HotItemCard key={index} name={item.name} price={item.price} image={item.image} index={index}/>
        ))}
        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
      </div>
    </div>
  );
}

export default Hotaccessories;
