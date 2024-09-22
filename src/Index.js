ddocument.getElementById('city').addEventListener('change', function() {
  const city = this.value;

  // Define timezones
  const timezones = {
      current: moment.tz.guess(),
      'Africa/Pretoria': 'Africa/Johannesburg',
      'Africa/Harare': 'Africa/Harare',
      'Europe/Paris': 'Europe/Paris'
  };

  const timezone = timezones[city] || timezones.current;

  const now = moment.tz(timezone);

  // Update the display for selected city
  if (city) {
      document.querySelector(`#${city.split('/')[1] || 'current'} .date`).innerText = now.format('MMMM Do YYYY');
      document.querySelector(`#${city.split('/')[1] || 'current'} .time`).innerText = now.format('hh:mm:ss A');
  } else {
      // Clear the date and time if no city is selected
      document.querySelectorAll('.date, .time').forEach(element => {
          element.innerText = '';
      });
  }
});
