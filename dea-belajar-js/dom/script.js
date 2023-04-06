const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
btn1.style.border = "none";
btn1.style.backgroundColor = "tomato";

const textOri = "Button 1";

btn1.addEventListener("click", () => {
	btn1.style.backgroundColor = "aqua";
});

btn1.addEventListener("mouseenter", () => {
	btn1.textContent = "Halo";
});

btn1.addEventListener("mouseleave", () => {
	btn1.textContent = textOri;
});

btn2.addEventListener("mouseenter", () => {
	const newText = document.createElement("p");
	newText.classList.add("newP");
	newText.textContent = "Halo saya ... kamu tau laa";
	document.body.append(newText);
});

btn2.addEventListener("mouseleave", () => {
	const newP = document.querySelectorAll(".newP");
	const randColor = () => {
		return Math.round(Math.random() * 255 + 1);
	};

	newP.forEach((p) => {
		p.style.color = `rgba(${randColor()}, ${randColor()}, ${randColor()})`;
	});
});
