document.getElementById('city').addEventListener('change', function() {
  const city = this.value;

  // Define timezones
  const timezones = {
      'Africa/Pretoria': 'Africa/Johannesburg',
      'Africa/Harare': 'Africa/Harare',
      'Europe/Paris': 'Europe/Paris'
  };

  // Get the timezone based on the selected city
  const timezone = timezones[city];

  if (timezone) {
      const now = moment.tz(timezone);
      
      // Update the date and time for the selected city
      document.querySelector(`#${city.split('/')[1]}.date`).innerText = now.format('MMMM Do YYYY');
      document.querySelector(`#${city.split('/')[1]}.time`).innerText = now.format('hh:mm:ss A');
  } else {
      // Clear the date and time if no city is selected
      document.querySelectorAll('.date, .time').forEach(element => {
          element.innerText = '';
      });
  }
});
