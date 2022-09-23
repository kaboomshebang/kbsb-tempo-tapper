let time = [];
let bpmIntervals = [];

let tempo = 0;
let tempoInterval = 0;

let tempoList = [];
let tempoIntervalList = [];

// buttons
const tapBtn = document.getElementById('tap');
const resetBtn = document.getElementById('reset');
const testBtn = document.getElementById('test');
const testStopBtn = document.getElementById('test-stop');

// value placement
const dIntervals = document.getElementById('intervals');
const dBpms = document.getElementById('bpms');
const dAvBpm = document.getElementById('av-bpm');
const dTimeBpm = document.getElementById('time-bpm');

const dt = document.getElementById('tempo-list');
const dti = document.getElementById('tempo-interval-list');

function renderData() {
	dIntervals.innerHTML = `<div>Time: <p>${time}</p></p></div>`;
	dBpms.innerHTML = `<div>Time-intervals: A-B-C (BPM) <p>${bpmIntervals}</p></div>`;
	dAvBpm.innerHTML = `<div>Average 1: A+B+C / TAPs: <p>${tempo}</p></div>`;
	dTimeBpm.innerHTML = `<div>Average 2: A-Z / TAPs: <p>${tempoInterval}</p></div>`;

	dt.innerHTML = `<div>BPM-list avg.1: <p>${tempoList}</p></div>`;
	dti.innerHTML = `<div>BPM-list avg.2: <p>${tempoIntervalList}</p></div>`;
}

// calculate BPM
function handleTap() {
	time.push(new Date().getTime());
	if (time.length > 1) {
		let timeDiff = time[time.length - 1] - time[time.length - 2];
		let bpm = (1000 / timeDiff) * 60;
		bpmIntervals.push(Math.floor(bpm * 10) / 10);

		// calculate average
		const tempoSum = bpmIntervals.reduceRight((acc, curr, i, arr) => {
			return acc + curr;
		});
		tempo = tempoSum / bpmIntervals.length;
		tempoList.push(Math.floor(tempo * 10) / 10);
	}
	intervalBpm();
	renderData();
}

// this way is more precise
function intervalBpm() {
	if (time.length > 1) {
		// difference between first timestamp and latest timestamp
		let totalDiff = time[time.length - 1] - time[0];
		// crosstable // 60000(ms) : bpm // time(ms) : taps
		let bps = totalDiff / (time.length - 1);
		let bpm = (1000 / bps) * 60;
		tempoInterval = Math.floor(bpm * 10) / 10;
		tempoIntervalList.push(Math.floor(bpm * 10) / 10);
	}
}

// reset the values
function handleReset() {
	time = [];
	bpmIntervals = [];
	tempo = 0;
	tempoInterval = 0;
	tempoList = [];
	tempoIntervalList = [];
	renderData();
}

let testInterval;

function handleTest() {
	testInterval = setInterval(handleTap, 500);
}

function handleTestStop() {
	clearInterval(testInterval);
}

// eventListeners
tapBtn.addEventListener('click', handleTap);
resetBtn.addEventListener('click', handleReset);
testBtn.addEventListener('click', handleTest);
testStopBtn.addEventListener('click', handleTestStop);
window.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		handleTap();
	}
});
