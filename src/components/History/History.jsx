import React from 'react'
import './History.css'

class History extends React.Component {

  render() {
    return(
      <div className="history-container">
        <h1>this stuff works</h1>
        <div className="history-subcontainer">
          <aside className="history-map-container">
          map goes here
          </aside>
          <section className="input-container">
            {/* STATE INPUT*/}
            <input
              type="text"
              placeholder="State"
              required="required"
            />
            {/* LICENSE INPUT*/}
            <input
              type="text"
              placeholder="License Plate"
              required="required"
            />
            {/*TIME SELECTION*/}
            <select>
              <option value="15">15mins</option>
              <option value="30">30mins</option>
              <option value="60">1hr</option>
              <option value="90">1 1/2hr</option>
              <option value="120">2hr</option>
            </select>
            {/* text area price display input*/}
            <input
              type="text"
              placeholder="$3.50"
              required="required"
            />
            <button className="paybtn">Pay & Park</button>
          </section>
        </div>
      </div>
    )
  }

}

export default History;