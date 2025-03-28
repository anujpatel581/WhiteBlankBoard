const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let isErasing = false;
let lastX = 0;
let lastY = 0;

// Set up drawing/painting functionality
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = isErasing ? '#fff' : '#000';

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

// Clear canvas function
document.getElementById('clearBtn').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Toggle erase mode
document.getElementById('eraseBtn').addEventListener('click', () => {
    isErasing = !isErasing;
    if (isErasing) {
        document.getElementById('eraseBtn').style.backgroundColor = '#dc3545';
    } else {
        document.getElementById('eraseBtn').style.backgroundColor = '#007bff';
    }
});
