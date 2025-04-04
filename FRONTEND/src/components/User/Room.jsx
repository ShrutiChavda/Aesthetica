import React, { useState } from 'react';
import Navbar from './UserNav';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../assets/css/user/room.css';

function Room() {
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' });

  const handleChange = (e) => {
    setDimensions({ ...dimensions, [e.target.name]: e.target.value });
  };

  const calculateSpace = () => {
    const volume = dimensions.length * dimensions.width * dimensions.height;
    alert(`Room Volume: ${volume} cubic feet`);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="room-container">
        <h2 className="room-title">Room Measurement</h2>
        <div className="room-content">
          <div className="room-image">
            <img src="/assets/images/room.jpg" alt="Room" />
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
  );
}

export default Room;
