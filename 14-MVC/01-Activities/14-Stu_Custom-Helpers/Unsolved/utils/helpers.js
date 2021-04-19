module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => {
    const newYear = Date(date).getyear() + 5
    const newDate = `${Date(date).getmonth()+1}/${Date(date).getdate()+1}/${newYear}`
    // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
    return newDate.toLocaleTimeString();
  },
};
