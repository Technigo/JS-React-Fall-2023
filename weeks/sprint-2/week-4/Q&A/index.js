// In JavaScript, you can convert a Unix timestamp to a human-readable date and time using the Date object.

// Unix is a unit expressed in seconds
/* Unix timestamps are used to represent a point in time as the number of seconds that have elapsed 
since January 1, 1970, at 00:00:00 UTC (Coordinated Universal Time). To convert this timestamp to a human-readable date and time, you can use various tools and programming languages.
 */

const data = {
  coord: {
    lon: 18.0649,
    lat: 59.3326,
  },
  weather: [
    {
      id: 802,
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  base: "stations",
  main: {
    temp: 6.3,
    feels_like: 2.9,
    temp_min: 5,
    temp_max: 7.25,
    pressure: 1012,
    humidity: 75,
  },
  visibility: 10000,
  wind: {
    speed: 5.14,
    deg: 360,
  },
  clouds: {
    all: 40,
  },
  dt: 1697623328,
  sys: {
    type: 1,
    id: 1788,
    country: "SE",
    sunrise: 1697607084,
    sunset: 1697643254,
  },
  timezone: 7200,
  id: 2673730,
  name: "Stockholm",
  cod: 200,
};

//Gives us the time in "human" form (as a date), mult. by 1000 to get it in ms.

/* Make sure to multiply the Unix timestamp by 1000 to convert it from seconds to milliseconds 
because JavaScript's Date object works with timestamps in milliseconds.

The code above will display the corresponding date and time in UTC.

If you need to display it in a different time zone, you can use libraries like moment-timezone or the built-in 
toLocaleString method to format the date and time accordingly.
 */

// Get sunrise time with the city's timezone

// Gives us the time in "human" form (as a date), mult. by 1000 to get it in ms.
const sunriseTime = new Date((data.sys.sunrise + data.timezone) * 1000);
console.log(sunriseTime);

// sets the minutes of the sunriseTime to the new value
sunriseTime.setMinutes(
  // .getMinutes() returns the current minutes of the sunriseTime.

  // Calculates the new minute value by adding the current minutes to the timezone offset.
  // This operation effectively adjusts the time to the local time zone by accounting for the offset.

  /* sunriseTime.getTimezoneOffset() returns the timezone offset in minutes for the local time zone. 
This offset represents the difference between UTC (Coordinated Universal Time) and the local time zone. 
It's usually a positive value for time zones behind UTC and a negative value for time zones ahead of UTC.
 */

  sunriseTime.getMinutes() + sunriseTime.getTimezoneOffset()
);

//Transforms it into just the Hour/minutes. Select the short variant to get the time with minutes and not seconds.
const sunriseShort = sunriseTime.toLocaleTimeString(["en-GB"], {
  timeStyle: "short",
});

console.log("stockholm", sunriseShort); // 07:31

// Wed Oct 18 2023 07:31:24 GMT+0200 (Central European Summer Time)
// GMT stands for "Greenwich Mean Time"

/* The purpose of this code is to convert a time represented in a UTC-based Date object (sunriseTime) to the equivalent time 
in the local time zone, taking the timezone offset into account. 
This adjustment is often necessary when working with time data from different time zones, 
ensuring that the displayed time is accurate for the user's location.
 */

// sydney sunrise
const sydneySunrise = new Date((1697569852 + 39600) * 1000);
const sydneySunriseLocale = sydneySunrise.setMinutes(
  sydneySunrise.getMinutes() + sydneySunrise.getTimezoneOffset()
);

const sydneySunriseShort = sydneySunrise.toLocaleTimeString(["en-GB"], {
  timeStyle: "short",
});

console.log("sydney", sydneySunriseShort);
