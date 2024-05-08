import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Placement.css';
const Placement = () => {

  // State to store placement data
  const [placementData, setplacementData] = useState([]);

  // Function to fetch data from the Google Sheets API
  const fetchplacementData = async () => {
    try {
      // Replace 'YOUR_SPREADSHEET_ID' with the actual ID from your Google Sheets URL
      const spreadsheetId = '1M5wVArSrZaSdcKz5PqmifcXcXOgxm3ZyJmrwtvA9H4E';
      // Replace 'Sheet1' with the name of your sheet
      const sheetName = 'Sheet1';
      // Replace 'YOUR_API_KEY' with your actual Google Sheets API key
      const apiKey = 'AIzaSyAEXok6xrcKA5K_HTbW3qDUGNb8BRkoXhQ';
      // Specify the range A2:C100
      const range = 'A2:C100';
      // Google Sheets API endpoint
      const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!${range}?key=${apiKey}`;

      // Make a GET request to the Google Sheets API
      const response = await axios.get(apiUrl);

      // Extract the values from the response
      const values = response.data.values;

      // Map values to placementData format
      const placement = values.map((row, index) => ({
        id: index + 1,
        name: row[0], // Assuming the first column is the name
        career: row[1], // Assuming the second column is the LinkedIn URL
        linkedin: row[2], // Assuming the third column is the GitHub URL
      }));

      // Set the placement data in the state
      setplacementData(placement);
    } catch (error) {
      console.error('Error fetching placement data:', error);
    }
  };

  // Fetch placement data on component mount
  useEffect(() => {
    fetchplacementData();
  }, []); // Empty dependency array means it will run only once on mount

  return (




    <>
      <Navbar />
      <div class="content-below-navbar">

      </div>
      <img src="../../../public/assets/hero2.png" loading="lazy" alt="IIPS Logo" className='main-img' />
      <div className='info2'>
        <h1>Placement</h1>
        <p>Home | Placement</p>


      </div>

      <section className="team-area section-padding30 fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mb-55">
                <h2 className='teamh'>Top Placed Student</h2>
              </div>
            </div>
          </div>
          <div className="team-active">
            <div className="single-cat text-center">
              <div className="team-member">
                <img src="../../../public/assets/saahil-ali.jpg" alt="" />
              </div>
              <div className="cat-cap">
                <h3> Saahil Ali</h3>
                <div className="social-links">
                  {/* Add your social media links */}

                  <a href="https://www.linkedin.com/in/saahil-ali-290399/" target='_blank'>
                    <img
                      src="../../../public/assets/linkedin.svg"
                      alt="LinkedIn"
                      className='social-links-icon'
                    />
                  </a>
                  <a href="https://github.com/programmer290399" target='_blank'>
                    <img
                      src="../../../public/assets/github.svg"
                      alt="GitHub"
                      className='social-links-icon'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="single-cat text-center">
              <div className="team-member">
                <img src="../../../public/assets/gopal-oswal.jpg" alt="" />
              </div>
              <div className="cat-cap">
                <h3> Gopal Oswal</h3>
                <div className="social-links">
                  {/* Add your social media links */}

                  <a href="https://www.linkedin.com/in/oswalgopal/" target='_blank'>
                    <img
                      src="../../../public/assets/linkedin.svg"
                      alt="LinkedIn"
                      className='social-links-icon'
                    />
                  </a>
                  <a href="https://oswalgopal.github.io/" target='_blank'>
                    <img
                      src="../../../public/assets/github.svg"
                      alt="GitHub"
                      className='social-links-icon'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="single-cat text-center">
              <div className="team-member">
                <img src="../../../public/assets/kashish-ahuja.jpg" alt="" />
              </div>
              <div className="cat-cap">
                <h3>Kashish Ahuja</h3>
                <div className="social-links">
                  {/* Add your social media links */}

                  <a href="https://www.linkedin.com/in/kashish-ahuja-1505/" target='_blank'>
                    <img
                      src="../../../public/assets/linkedin.svg"
                      alt="LinkedIn"
                      className='social-links-icon'
                    />
                  </a>
                  <a href="https://github.com/kashishahuja2002" target='_blank'>
                    <img
                      src="../../../public/assets/github.svg"
                      alt="GitHub"
                      className='social-links-icon'
                    />
                  </a>
                </div>
              </div>
            </div>



          </div>
        </div>



      </section>


      <section className="placement-page">
        <h1 className="placement-heading">Top Companies</h1>
        <table className="placement-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Career Page</th>
              <th>LinkedIn</th>
            </tr>
          </thead>
          <tbody>
            {placementData.map((placement) => (
              <tr key={placement.id}>
                <td>{placement.name}</td>
                <td>
                  <a href={placement.career} target="_blank" rel="noopener noreferrer">
                    <img src="../../../public/assets/career.jpg" alt="Career" width="auto" height="60" />
                  </a>


                </td>
                <td>
                  <a href={placement.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="../../../public/assets/linkedin.svg" alt="GitHub" width="auto" height="40" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Footer />
    </>
  );
};

export default Placement;
