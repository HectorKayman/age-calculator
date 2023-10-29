import { useState } from 'react';
import iconArrow from './assets/images/icon-arrow.svg';
import { FormInput } from './FormInput';

export function Form({
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
        <div className="input-div div-pad"></div>
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
