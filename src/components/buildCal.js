export default function buildCalendar(value) {
  const startDay = value.clone().startOf("week"); //這一頁第一週的第一天
  const endDay = value.clone().endOf("week"); //這一頁最後一週的最後一天

  const day = startDay.clone().subtract(1, "day"); //這一頁第一週的第一天減1
  const calendar = [];
  while (day.isBefore(endDay, "day")) {
    //isBefore 是用來查詢是否在早於後面的時間
    //push是將對象推到陣列中
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  return calendar;
}
