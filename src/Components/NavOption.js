import React,{useState,useEffect} from 'react';
import NavCard from './NavCard';
function NavOption({miphone,redmiphone,tv,laptop,fitnessLifestyle,home,radio,accessories}) {
    const [miphoneToggle,setmiphoneToggle]=useState(false);
    const [redmiphoneToggle,setredmiphone]=useState(false);
    const [tvToggle,settv]=useState(false);
    const [laptopToggle,setlaptop]=useState(false);
    const [fitnessLifestyleToggle,setfitnessAndLifeStyle]=useState(false);
    const [homeToggle,sethome]=useState(false);
    const [radioToggle,setradio]=useState(false);
    const [accessoriesToggle,setaccessories]=useState(false);

    useEffect(()=>{
        
        if(window.location.pathname==="/miphones"){
            setmiphoneToggle(true);
        }
         if(window.location.pathname==="/redmiphones"){
            setredmiphone(true);
        }
         if(window.location.pathname==="/tv"){
            settv(true);
        }
        if(window.location.pathname==="/laptops"){
            setlaptop(true);
        }
        if(window.location.pathname==="/lifestyle"){
            setfitnessAndLifeStyle(true);
        }
        if(window.location.pathname==="/home"){
            sethome(true);
        }
        if(window.location.pathname==="/audio"){
            setradio(true);
        }
        if(window.location.pathname==="/accessories"){
            setaccessories(true);
        }
    },[])

 return (
    <div className='Navoption'>
      {miphoneToggle ? miphone.map((item,index)=>(
        <NavCard name={item.name} image={item.image} key={index} index={index} price={item.price}/>
      )):null}
      {redmiphoneToggle ? redmiphone.map((item,index)=>(
        <NavCard name={item.name} image={item.image} key={index} index={index} price={item.price}/>
      )):null}
      {tvToggle ? tv.map((item,index)=>(
        <NavCard name={item.name} image={item.image} key={index} index={index} price={item.price}/>
      )):null}
      {laptopToggle ? laptop.map((item,index)=>(
        <NavCard name={item.name} image={item.image} key={index} index={index} price={item.price}/>
      )):null}
      {fitnessLifestyleToggle ? fitnessLifestyle.map((item,index)=>(
        <NavCard name={item.name} image={item.image} key={index} index={index} price={item.price}/>
      )):null}
      {homeToggle ? home.map((item,index)=>(
        <NavCard name={item.name} image={item.image} key={index} index={index} price={item.price}/>
      )):null}
      {radioToggle ? radio.map((item,index)=>(
        <NavCard name={item.name} image={item.image} key={index} index={index} price={item.price}/>
      )):null}
      {accessoriesToggle ? accessories.map((item,index)=>(
        <NavCard name={item.name} image={item.image} key={index} index={index} price={item.price}/>
      )):null}
    </div>
  );
}

export default NavOption;
