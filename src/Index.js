document.getElementById('city').addEventListener('change', function() {
  const city = this.value;

  // Define city timezones
  const timezones = {
    current: moment.tz.guess(),
    'Africa/Pretoria': 'Africa/Johannesburg',
    'Africa/Harare': 'Africa/Harare',
    'Europe/Paris': 'Europe/Paris'
  };

  const timezone = timezones[city] || timezones.current;

  const now = moment.tz(timezone);

  if (city) {
    document.querySelector(`#${city.split('/')[1] || 'current'} .date`).innerText = now.format('MMMM Do YYYY');
    document.querySelector(`#${city.split('/')[1] || 'current'} .time`).innerText = now.format('hh:mm:ss A');
  }
});
