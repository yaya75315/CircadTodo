function isSelected(day, value) {
  return value.isSame(day, "day");
}

export function beforeToday(day) {
  return day.isBefore(new Date(), "day");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

function NumStyle(day, hours, value) {
  return (
    hours[day.format("YYYY-MM-DD")] === undefined && value.isSame(day, "day")
  );
}

export default function dayStyle(day, value, hours) {
  if (beforeToday(day)) return "before";
  if (NumStyle(day, hours, value)) return "selectedNull";
  if (isSelected(day, value)) return "selected";
  if (isToday(day)) return "today";

  return "";
}
