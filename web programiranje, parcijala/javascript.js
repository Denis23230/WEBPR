// ======= Vision Board Logic =======

// Odaberi glavni element
const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const clearBtn = document.getElementById("clearBtn");
const eraseBtn = document.getElementById("eraseBtn");

let drawing = false;
let currentColor = colorPicker.value;
let isErasing = false;

Function startDraw(e) {
	drawing = true;
	draw(e);
}
Function endDraw() {
	drawing = false;
	ctx.beginPath();
}

Function draw(e) {
	if (!drawing) return;
	
	cost rect = canvas.getBoundingClientRect();
	
	const scaleX = canvas.width / rect.width;
	const scaleX = canvas.height / rect.height;
	
	const clientX = e.clientX 
	
	const clientX = (clienX - rect.left) * scaleX;
	const clientX = (clienY - rect.top) * scaleY;
	
	ctx.lineWidth = brushSize.value,
	CTX.lineCap = "round";
	ctx.strokeStyle = isErasing ? "#FFFFFF" : currentColor;
	
	CTX.LINE(X, Y);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(x, y);
}