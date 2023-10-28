import { useState } from 'react';
import iconArrow from './assets/images/icon-arrow.svg';

export default function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [gapDay, setGapDay] = useState(null);
  const [gapMonth, setGapMonth] = useState(null);
  const [gapYear, setGapYear] = useState(null);

  function handleCalculateAge() {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    setGapDay(currentDay - day);
    setGapMonth(currentMonth - month);
    setGapYear(currentYear - year);
  }

  return (
    <div className="container">
      <Form
        day={day}
        month={month}
        year={year}
        onChangeDay={setDay}
        onChangeMonth={setMonth}
        onChangeYear={setYear}
        calculateAge={handleCalculateAge}
      />
      <Display gapDay={gapDay} gapMonth={gapMonth} gapYear={gapYear} />
    </div>
  );
}

function Form({
  day,
  month,
  year,
  onChangeDay,
  onChangeMonth,
  onChangeYear,
  calculateAge,
}) {
  const [isValidDay, setIsValidDay] = useState(true);
  const [isValidMonth, setIsValidMonth] = useState(true);
  const [isValidYear, setIsValidYear] = useState(true);

  const [errorMsgDay, setErrorMsgDay] = useState('');
  const [errorMsgMonth, setErrorMsgMonth] = useState('');
  const [errorMsgYear, setErrorMsgYear] = useState('');

  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function handleError(type, fnValid, fnErrMsg, input, min, max) {
    if (input === '') {
      fnValid(false);
      fnErrMsg('This field is required');
      return false;
    } else if (input < min || input > max || isNaN(Number(input))) {
      fnValid(false);
      fnErrMsg(`Must be a valid ${type}`);
      return false;
    } else {
      fnValid(true);
      fnErrMsg('');
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validDay = handleError(
      'day',
      setIsValidDay,
      setErrorMsgDay,
      day,
      1,
      31
    );
    const validMonth = handleError(
      'month',
      setIsValidMonth,
      setErrorMsgMonth,
      month,
      1,
      12
    );
    const validYear = handleError(
      'year',
      setIsValidYear,
      setErrorMsgYear,
      year,
      1889,
      2023
    );

    if (day > monthLength[month - 1]) {
      setIsValidDay(false);
      setErrorMsgDay('Must be a valid date');
      setIsValidMonth(false);
      setErrorMsgMonth('');
      setIsValidYear(false);
      setErrorMsgYear('');
    } else if (validDay && validMonth && validYear) {
      calculateAge();
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex-flow form-top">
        <FormInput
          id="form-day"
          value={day}
          placeholder="DD"
          onChangeInput={onChangeDay}
          isValid={isValidDay}
          errorMessage={errorMsgDay}
        >
          Day
        </FormInput>
        <FormInput
          id="form-month"
          value={month}
          placeholder="MM"
          onChangeInput={onChangeMonth}
          isValid={isValidMonth}
          errorMessage={errorMsgMonth}
        >
          Month
        </FormInput>
        <FormInput
          id="form-year"
          value={year}
          placeholder="YYYY"
          onChangeInput={onChangeYear}
          isValid={isValidYear}
          errorMessage={errorMsgYear}
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

function FormInput({
  id,
  value,
  placeholder,
  onChangeInput,
  isValid,
  errorMessage,
  children,
}) {
  return (
    <div className="input-div">
      <label className={!isValid ? 'error-label' : ''} htmlFor={id}>
        {children}
      </label>
      <input
        className={!isValid ? 'error-input' : ''}
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      {!isValid && <div className="error-field">{errorMessage}</div>}
    </div>
  );
}

function Display({ gapDay, gapMonth, gapYear }) {
  return (
    <div className="display">
      <p>
        <span>{gapYear ? gapYear : '--'}</span>years
      </p>
      <p>
        <span>{gapMonth ? gapMonth : '--'}</span>months
      </p>
      <p>
        <span>{gapDay ? gapDay : '--'}</span>days
      </p>
    </div>
  );
}
