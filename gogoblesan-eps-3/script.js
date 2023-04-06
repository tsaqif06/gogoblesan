const result = document.querySelector("#result");
let hobbyList = [];

function saveHobbyInput() {
	const hobby = document.querySelector("#hobbyInput").value;
	hobbyList.push(hobby);
	result.textContent = hobbyList;
}

function switcher() {
	const from = document.querySelector("#from");
	const to = document.querySelector("#to");
	const x = from.value - 1;
	const y = to.value - 1;
	let temp = hobbyList[x];
	hobbyList[x] = hobbyList[y];
	hobbyList[y] = temp;
	result.textContent = hobbyList;
}
