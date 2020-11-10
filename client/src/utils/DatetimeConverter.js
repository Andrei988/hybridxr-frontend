const convert = (timestamp) => {
  var currentDate = new Date();
  var date = new Date(timestamp);
  const t = Math.abs(currentDate - date);
  var days = Math.floor(t / 8.64e7);
  var hours = Math.floor((t % 8.64e7) / 3.6e6);
  var minutes = Math.floor((t % 3.6e6) / 6e4);
  var seconds = Math.floor((t % 6e4) / 1e3);

  if (days === 0 && hours !== 0) {
    return hours + " hours " + minutes + " minutes ago";
  } else if (hours === 0 && days === 0 && minutes > 5) {
    return minutes + " minutes ago";
  } else if (days !== 0 && hours === 0) {
    return days + " days ago";
  } else if(hours === 0 && days === 0 && minutes < 5) {
    return "a moment ago"
  }
  else {
    hours = hours - (days - 1) * 24;
    return days + " days " + hours + " hours ago";
  }
};

export default convert;
