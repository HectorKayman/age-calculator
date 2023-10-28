import { useState } from 'react';
import iconArrow from './assets/images/icon-arrow.svg';

export default function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  return (
    <div className="container">
      <Form
        day={day}
        month={month}
        year={year}
        onChangeDay={setDay}
        onChangeMonth={setMonth}
        onChangeYear={setYear}
      />
      <Display />
    </div>
  );
}

function Form({ day, month, year, onChangeDay, onChangeMonth, onChangeYear }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex-flow form-top">
        <FormInput
          id="form-day"
          value={day}
          placeholder="DD"
          onChangeInput={onChangeDay}
        >
          Day
        </FormInput>
        <FormInput
          id="form-month"
          value={month}
          placeholder="MM"
          onChangeInput={onChangeMonth}
        >
          Month
        </FormInput>
        <FormInput
          id="form-year"
          value={year}
          placeholder="YYYY"
          onChangeInput={onChangeYear}
        >
          Year
        </FormInput>
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

function FormInput({ id, value, placeholder, onChangeInput, children }) {
  return (
    <div className="input-div">
      <label htmlFor={id}>{children}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
      />
    </div>
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
