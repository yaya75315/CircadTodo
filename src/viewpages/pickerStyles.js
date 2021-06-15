function isSelected(day, value) {
  return value.isSame(day, "day");
}

export function beforeToday(day) {
  return day.isBefore(new Date(), "day");
}

function isToday(day) {
  return day.isSame(new Date(), "day");
}

function oldHoursBefore(day) {
  return day.isBefore(new Date(), "day");
}

export function afterDeadline(day, deadlineValue) {
  return day.isAfter(deadlineValue, "day");
}

export function oldHour(day, hours) {
  if (oldHoursBefore(day) && hours[day.format("D").toString()] != null) {
    return "oldBefore";
  } else if (hours[day.format("D").toString()] != null) {
    return "oldHours";
  }
  return "oldHoursNull";
}

export default function dayStyle(day, value, deadlineValue) {
  if (beforeToday(day)) return "before";
  if (afterDeadline(day, deadlineValue)) return "after";
  if (isSelected(day, value)) return "selected";
  if (isToday(day)) return "today";

  return "date";
}
