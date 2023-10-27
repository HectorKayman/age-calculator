import iconArrow from './assets/images/icon-arrow.svg';

export default function App() {
  return (
    <div>
      <Form />
      <Display />
    </div>
  );
}

function Form() {
  return (
    <form>
      <div>
        <label htmlFor="form-day">Day</label>
        <input type="text" id="form-day" placeholder="DD" />
      </div>
      <div>
        <label htmlFor="form-month">Month</label>
        <input type="text" id="form-month" placeholder="MM" />
      </div>
      <div>
        <label htmlFor="form-year">Year</label>
        <input type="text" id="form-year" placeholder="YYYY" />
      </div>
      <div>
        <button>
          <img src={iconArrow} alt="submit" />
        </button>
      </div>
    </form>
  );
}

function Display() {
  return (
    <div>
      <p>
        <span>--</span> years
      </p>
      <p>
        <span>--</span> months
      </p>
      <p>
        <span>--</span> days
      </p>
    </div>
  );
}
