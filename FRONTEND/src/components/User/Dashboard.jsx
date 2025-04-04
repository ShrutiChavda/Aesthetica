
import React, { useState } from 'react';
import Blog from "./Blog";
import '../../assets/css/user/DesignStyle.css';
import style1 from '../../assets/images/uStyle1.png';
import style2 from '../../assets/images/uStyle2.png';
import style3 from '../../assets/images/uStyle3.png';
import '../../assets/css/user/room.css';
import room from "../../assets/images/room.png";

function Dashboard() {

  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' });

  const handleChange = (e) => {
    setDimensions({ ...dimensions, [e.target.name]: e.target.value });
  };

  const calculateSpace = () => {
    const volume = dimensions.length * dimensions.width * dimensions.height;
    alert(`Room Volume: ${volume} cubic feet`);
  };

  return (
    <div className="font-sans text-black bg-white">
    <Blog/>
       <div className="style-page-container">
             <div className="find-style">
               <h2>Find Your Style</h2>
               <div className="style-grid">
                 <div className="style-item">
                   <img src={style1} alt="Modern Style" className="style-image" />
                   <h3>Modern</h3>
                   <p>Clean lines, minimal decor, and contemporary aesthetics.</p>
                   <a href="#" className="explore-style">Explore Style</a>
                 </div>
                 <div className="style-item">
                   <img src={style2} alt="Classic Style" className="style-image" />
                   <h3>Classic</h3>
                   <p>Timeless elegance with traditional elements.</p>
                   <a href="#" className="explore-style">Explore Style</a>
                 </div>
                 <div className="style-item">
                   <img src={style3} alt="Scandinavian Style" className="style-image" />
                   <h3>Scandinavian</h3>
                   <p>Light, airy spaces with natural materials.</p>
                   <a href="#" className="explore-style">Explore Style</a>
                 </div>
               </div>
             </div>
           </div>

         <div className="room-container">
                <h2 className="room-title">Room Measurement</h2>
                <div className="room-content">
                  <div className="room-image">
                    <img src={room} alt="Room" />
                  </div>
                  <div className="room-form">
                    <h3 className="form-title">Room Dimensions</h3>
                    <input type="number" name="length" placeholder="Length (ft)" value={dimensions.length} onChange={handleChange} />
                    <input type="number" name="width" placeholder="Width (ft)" value={dimensions.width} onChange={handleChange} />
                    <input type="number" name="height" placeholder="Height (ft)" value={dimensions.height} onChange={handleChange} />
                    <button onClick={calculateSpace}>Calculate Space</button>
                  </div>
                </div>
              </div>
    </div>
  )
}
export default Dashboard
