import iconArrow from './assets/images/icon-arrow.svg';

export default function App() {
  return (
    <div className="container">
      <Form />
      <Display />
    </div>
  );
}

function Form() {
  return (
    <form>
      <div className="flex-flow form-top">
        <div className="input-div">
          <label htmlFor="form-day">Day</label>
          <input type="text" id="form-day" placeholder="DD" />
        </div>
        <div className="input-div">
          <label htmlFor="form-month">Month</label>
          <input type="text" id="form-month" placeholder="MM" />
        </div>
        <div className="input-div">
          <label htmlFor="form-year">Year</label>
          <input type="text" id="form-year" placeholder="YYYY" />
        </div>
        <div className="input-div"></div>
      </div>
      <div className="form-bot">
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
