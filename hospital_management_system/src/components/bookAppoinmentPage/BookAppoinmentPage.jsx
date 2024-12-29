import React, {useState} from 'react';
import './bookAppoinmentPage.scss';

const BookAppoinmentPage = () => {
    const [name, setName] = useState('');
    const [appDate, setAppDate] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [time, setTime] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      console.log('Logged in with:', {name,appDate, mobileNumber, time });
    };
  return (
    <div className="bookContainer">
      <div className="login-fields-container">
        <form className="form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Patient Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Phone Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Date"
            value={appDate}
            onChange={(e) => setAppDate(e.target.value)}
            required
          />
          <h4>Select a Time Slot</h4>
          <div className='time--slot--container' >
            <div>
                <div className='checkbox--label'>
                <input style={{boxShadow:'none'}} onChange={(e) => setTime('09AM')} type="checkbox" />
                <label>09AM</label>
                </div>
                <div className='checkbox--label'>
                <input style={{boxShadow:'none'}} onChange={(e) => setTime('10AM')} type="checkbox" />
                <label>10AM</label>
                </div>
                <div className='checkbox--label'>
                <input style={{boxShadow:'none'}} onChange={(e) => setTime('11AM')} type="checkbox" />
                <label>11AM</label>
                </div>
                <div className='checkbox--label'>
                <input style={{boxShadow:'none'}} onChange={(e) => setTime('12PM')} type="checkbox" />
                <label>12PM</label>
                </div>
            </div>
            <div>
                <div className='checkbox--label'>
                <input style={{boxShadow:'none'}} onChange={(e) => setTime('03PM')} type="checkbox" />
                <label>03PM</label>
                </div>
                <div className='checkbox--label'>
                <input style={{boxShadow:'none'}} onChange={(e) => setTime('04PM')} type="checkbox" />
                <label>04PM</label>
                </div>
                <div className='checkbox--label'>
                <input style={{boxShadow:'none'}} onChange={(e) => setTime('05PM')} type="checkbox" />
                <label>05PM</label>
                </div>
                <div className='checkbox--label'>
                <input style={{boxShadow:'none'}} onChange={(e) => setTime('06PM')} type="checkbox" />
                <label>06PM</label>
                </div>
            </div>
          </div>
          <button className="login-button" type="submit">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookAppoinmentPage
