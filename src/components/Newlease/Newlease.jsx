import React from 'react'
import Header from '../Header/Header.jsx';
import './Newlease.css'

class Newlease extends React.Component {

  render() {
    return(
      <div className="background-app">
        <Header/>
        <div className="history-container">
          <div className="history-subcontainer">
            <aside className="history-map-container">
            map goes here
            </aside>
            <section className="input-container">
              {/* STATE INPUT*/}
              <div className="small-cont">
                <p>Select State</p>
                <select>
                  <option value="NY">New York</option>
                  <option value="Nj">New Jersey</option>
                </select>
              </div>
              {/* LICENSE INPUT*/}
              <div className="small-cont">
                <p>License Plate Number:</p>
                <input
                  type="text"
                  placeholder="License Plate"
                  required="required"
                />
              </div>
              {/*TIME SELECTION*/}
              <div className="small-cont">
                <p>Select Time:</p>
                <select>
                  <option value="15">15mins</option>
                  <option value="30">30mins</option>
                  <option value="60">1hr</option>
                  <option value="90">1 1/2hrs</option>
                  <option value="120">2hr</option>
                </select>
              </div>
              {/* text area price display input*/}
              <div className="small-cont">
                <p>Your Fare:</p>
                <input
                  type="text"
                  placeholder="$3.50"
                  required="required"
                />
              </div>
              <button className="paybtn">Pay & Park</button>
            </section>
          </div>
        </div>
      </div>
    )
  }

}

export default Newlease;
