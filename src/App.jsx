import { useState } from 'react';
import { Display } from './Display';
import { Form } from './Form';

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
    setGapMonth(currentMonth + 1 - month);
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
