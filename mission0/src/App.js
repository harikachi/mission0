import React, {useState} from 'react';
import './App.css';
import logo from './MyCompLogo.jpg'; // Make sure to add your logo image to the 'src' directory
import logoMid from './ImageMiddle.jpg';
import img1 from './Image1.jpg';
import img2 from './Image2.jpg';
import img3 from './Image3.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-left">
          <img src={logo} alt="Company Logo" className="Logo" />
          <span className="Company-name">HAPPY HOMES LTD.</span>
        </div>
        <div className="Header-right">
          <nav className="Header-nav">
            <div className="menu-icon" id="menu-icon" onClick={handleMenuToggle}>
              ☰
            </div>
            <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
              <li><a href="#menu1">DOMESTIC</a></li>
              <li><a href="#menu2">GLOBAL</a></li>
              <li><a href="#menu3">BRAVES</a></li>
              <li><a href="#login" className="Login-link">Login</a></li>
            </ul>
          </nav>
          <script src="scripts.js"></script>
        </div>
      </header>
      
       <div className="container">
          <div className="half">
            <p className="justify-text"> 
                Escape to unparalleled comfort and elegance with our exclusive accommodation options. 
                Our meticulously designed rooms offer breathtaking views, luxurious furnishings, and state-of-the-art 
                amenities to ensure your stay is nothing short of extraordinary. Enjoy personalized service that caters 
                to your every need, from gourmet dining experiences to relaxing spa treatments. Our prime location places 
                you at the heart of vibrant attractions, ensuring easy access to the best local experiences. Whether you’re
                 here for a serene retreat or an adventurous exploration, our knowledgeable concierge is ready to help you 
                 make the most of your stay. Book now to experience exceptional hospitality and create unforgettable 
                 memories with us. Your perfect escape awaits!
            </p>
            </div>
            <div className="half2">
              <img src={logoMid} alt="Section One Middle Logo" className="Logomid" />
            </div>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-box"></input>
          <button className="search-button">Search</button>
        </div>
          <div className="image-container">
            <div className="image-item"> 
              <img src={img1} alt="Domestic Room Logo" className="image" />
              <p className="left-justify-text">
                <b>Domestic travel accommodation</b> <br></br>
                These can include hotels, motels, bed and breakfasts, vacation rentals, and hostels. 
                Hotels often provide a range of amenities, such as room service, gyms, and pools, catering to different 
                budgets and preferences. Motels are typically more affordable and conveniently located along highways for 
                road travelers. Bed and breakfasts offer a more personalized experience, often in a homely setting with a 
                local touch.
                </p>
            </div>
            <div className="image-item"> 
             <img src={img2} alt="International Logo" className="image" />
              <p className="left-justify-text">
                  <b>International travel accommodation</b><br></br>
                  This can include a range of choices such as international hotels, luxury resorts, serviced apartments, 
                  and vacation rentals. Travelers often seek accommodations that offer comfort, security, and proximity to 
                  major attractions or business districts. Additionally, many international accommodations provide amenities 
                  and services tailored to diverse cultural needs and preferences, enhancing the overall travel experience.
              </p>
            </div>
            <div className="image-item"> 
              <img src={img3} alt="Bravers Logo" className="image" />
              <p className="left-justify-text"> 
                <b>Braves travel accommodation</b><br></br>
                This can include options such as eco-lodges, yurts, treehouses, and tented camps, which offer a closer connection 
                to nature. These accommodations frequently provide access to adventure activities like hiking, climbing, or wildlife 
                safaris, enhancing the thrill of the journey. Adventure travel lodgings often emphasize sustainability and minimal 
                impact on the environment, aligning with the ethos of responsible travel.
              </p>
            </div> 
          </div>
      
      <main>
        {/* Your main content goes here */}
      </main>
    </div>
  );
}

export default App;
