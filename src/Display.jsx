export function Display({ gapDay, gapMonth, gapYear }) {
  return (
    <div className="display">
      <p>
        <span>{gapYear === null ? '--' : gapYear}</span>years
      </p>
      <p>
        <span>{gapMonth === null ? '--' : gapMonth}</span>months
      </p>
      <p>
        <span>{gapDay === null ? '--' : gapDay}</span>days
      </p>
    </div>
  );
}
