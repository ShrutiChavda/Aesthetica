
import React from 'react'
import Blog from "./Blog";
import '../../assets/css/user/DesignStyle.css';
import style1 from '../../assets/images/uStyle1.png';
import style2 from '../../assets/images/uStyle2.png';
import style3 from '../../assets/images/uStyle3.png';
function Dashboard() {
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
    </div>
  )
}

export default Dashboard
