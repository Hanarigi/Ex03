function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.querySelectorAll('div').forEach(div => {
    div.addEventListener('click', () => {
        const randomColor = generateRandomColor();
        div.style.backgroundColor = randomColor;
    });
});
