import React from 'react';
import './Events.css'; // Import your CSS file
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Events = () => {
  return (
    <>
      <Navbar />
      <div class="content-below-navbar">

</div>
<img src="../../../public/assets/hero2.png" loading="lazy" alt="IIPS Logo" className='main-img' />
<div className='info2'>
  <h1>Events</h1>
  <p>Home | Events</p>


</div>
        
        <h1 className='event-heading'>Events in IIPS</h1>
        <div className="events-container">
        <div className="event-container">
            <div className="event-image">
              <img src="../../../public/assets/tourista-event.jpg" alt="Event 2" />
            </div>
            <div className="event-details">
              <h2>Tourista</h2>
              <p>Cultural event initiated by MBA-Tourism for world tourism day. It includes various events like dance, treasure hunt, best of waste etc.</p>
              <a href="https://iips.edu.in/event.php" className="event-button">Know More !</a>
            </div>
          </div>
          <div className="event-container">
            <div className="event-image">
              <img src="../../../public/assets/expression-event.jpg" alt="Event 1" />
            </div>
            <div className="event-details">
              <h2>Expression</h2>
              <p>Xpressions is an annual event to incorporate the finer aspects of team building, co-ordination, Time management, effectiveness and efficiency.</p>
              <a href="https://iips.edu.in/event.php" className="event-button">Know More !</a>
            </div>
          </div>
          <div className="event-container">
            <div className="event-image">
              <img src="../../../public/assets/synergy-event.jpeg" alt="Event 2" />
            </div>
            <div className="event-details">
              <h2>Synergy</h2>
              <p>Intra College sports event of Institute. It includes all major sports like Crickets, Football, Chess, Volleyball etc.</p>
              <a href="https://iips.edu.in/event.php" className="event-button">Know More !</a>
            </div>
          </div>
          {/* Add more event containers as needed */}
          

        </div>
      
      <Footer />
    </>
  );
};

export default Events;
