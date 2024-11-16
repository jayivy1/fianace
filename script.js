let body = document.body;
let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');
let yearEl = document.getElementById('year');
let monthEl = document.getElementById('month');

let usdaysEl = document.getElementById('usdays');
let ushoursEl = document.getElementById('ushours');
let usminutesEl = document.getElementById('usminutes');
let ussecondsEl = document.getElementById('usseconds');
let usyearEl = document.getElementById('usyear');
let usmonthEl = document.getElementById('usmonth');
setInterval(updateTime, 100);

function updateTime() {
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let days = date.getDate();
	let hours = Math.floor(date.getHours());
	let minutes = Math.floor(date.getMinutes());
	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours 
	minutesEl.innerHTML = minutes ;
	yearEl.innerHTML = year;
	monthEl.innerHTML = month;



	let usOptions = { timeZone: 'America/New_York' };
  let usDate = new Date().toLocaleString('en-US', usOptions);
  let usYear = new Date(usDate).getFullYear();
  let usMonth = new Date(usDate).getMonth() + 1;
  let usDays = new Date(usDate).getDate();
  let usHours = Math.floor(new Date(usDate).getHours());
  let usMinutes = Math.floor(new Date(usDate).getMinutes());
  usdaysEl.innerHTML = usDays;
  ushoursEl.innerHTML = usHours;
  usminutesEl.innerHTML = usMinutes;
  usyearEl.innerHTML = usYear;
  usmonthEl.innerHTML = usMonth;
}