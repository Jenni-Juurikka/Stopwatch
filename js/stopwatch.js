let timeSeconds = 0;
let timeMilliseconds = 0;
let timeInterval;

function startInterval() {
	timeInterval = setInterval(addSecondsToTime, 100);
}

function addSecondsToTime() {
	timeMilliseconds < 10 ? timeMilliseconds++ : (timeMilliseconds = 0, timeSeconds++);
	return document.getElementById("watchTime").innerHTML = timeSeconds + ":" + timeMilliseconds;
}

function resetWatch() {
	timeSeconds = 0;
	timeMilliseconds = 0;
	return document.getElementById("watchTime").innerHTML = "";
}