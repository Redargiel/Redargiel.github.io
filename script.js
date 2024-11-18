// Smooth scroll effect for navigation links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').replace('.html', '');
        window.location.href = `${sectionId}.html`;
    });
});

// Snow Effect
const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createSnowflakes() {
    particles = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5
    }));
}
createSnowflakes();

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    particles.forEach(p => {
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    });
    ctx.fill();
}

function updateSnowflakes() {
    particles.forEach(p => {
        p.y += p.speed;
        if (p.y > canvas.height) {
            p.y = -p.radius;
            p.x = Math.random() * canvas.width;
        }
    });
}

function animateSnow() {
    drawSnowflakes();
    updateSnowflakes();
    requestAnimationFrame(animateSnow);
}
animateSnow();

// Validation Web - Form Validation Script
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default submission
    const alertContainer = document.getElementById('alert-container');
    alertContainer.innerHTML = ''; // Clear previous alerts

    const errors = [];
    const jmeno = document.getElementById('jmeno').value.trim();
    const prijmeni = document.getElementById('prijmeni').value.trim();
    const email = document.getElementById('email').value.trim();
    const telnumber = document.getElementById('telnumber').value.trim();
    const adresa = document.getElementById('adresa').value.trim();
    const mesto = document.getElementById('mesto').value.trim();
    const zprava = document.getElementById('zprava').value.trim();

    if (!jmeno) errors.push('First name is required.');
    if (!prijmeni) errors.push('Last name is required.');
    if (!email || !/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) errors.push('Valid email is required.');
    if (!telnumber || !/^\+?\d{9,15}$/.test(telnumber)) errors.push('Valid phone number is required.');
    if (!adresa) errors.push('Address is required.');
    if (!mesto) errors.push('City is required.');
    if (zprava.length > 255) errors.push('Message must be under 255 characters.');

    if (errors.length > 0) {
        alertContainer.innerHTML = errors.map(err => `<p>${err}</p>`).join('');
    } else {
        alertContainer.innerHTML = '<p>Form is valid! Submitting...</p>';
    }
});

