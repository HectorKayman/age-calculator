import { useState } from 'react';
import iconArrow from './assets/images/icon-arrow.svg';

export default function App() {
  const [day, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  return (
    <div className="container">
      <Form
        day={day}
        month={month}
        year={year}
        onChangeDate={setDate}
        onChangeMonth={setMonth}
        onChangeYear={setYear}
      />
      <Display />
    </div>
  );
}

function Form({ day, month, year, onChangeDate, onChangeMonth, onChangeYear }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex-flow form-top">
        <div className="input-div">
          <label htmlFor="form-day">Day</label>
          <input
            type="text"
            id="form-day"
            placeholder="DD"
            value={day}
            onChange={(e) => onChangeDate(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label htmlFor="form-month">Month</label>
          <input
            type="text"
            id="form-month"
            placeholder="MM"
            value={month}
            onChange={(e) => onChangeMonth(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label htmlFor="form-year">Year</label>
          <input
            type="text"
            id="form-year"
            placeholder="YYYY"
            value={year}
            onChange={(e) => onChangeYear(e.target.value)}
          />
        </div>
        <div className="input-div"></div>
      </div>
      <div className="flex-flow form-bot">
        <hr />
        <button>
          <img src={iconArrow} alt="submit" />
        </button>
      </div>
    </form>
  );
}

function Display() {
  return (
    <div className="display">
      <p>
        <span>--</span>years
      </p>
      <p>
        <span>--</span>months
      </p>
      <p>
        <span>--</span>days
      </p>
    </div>
  );
}
