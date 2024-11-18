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

// Language Toggle Script
    const isCzech = currentLang === 'CZ';

    const page = document.body.getAttribute('data-page');
    const translations = {
        en: {
            navbar: ["Home", "About Me", "Projects", "Contact", "Tasks"],
            footer: "&copy; 2024 Dominik Grader. All rights reserved.",
            index: {
                title: "Welcome to My Portfolio",
                description: "A space to showcase my skills, projects, and creativity with an anime-inspired theme!"
            },
            about: {
                title: "About Me",
                description: "Hi, I'm Dominik Grader, an IT student at SPŠT. I specialize in web development, game development, and programming. My experience includes:",
                skills: [
                    "C++, C#, HTML, JavaScript, CSS, Java",
                    "Basics of Python",
                    "Adobe Photoshop, Adobe Illustrator, Adobe Animate, Adobe Premiere Pro",
                    "Unreal Engine, Unity"
                ]
            },
            projects: {
                title: "My Projects",
                description: "Explore some of my best works, including web and game development projects!",
                projectDescriptions: [
                    "An engaging tower defense game where a quirky protagonist defends his home against relentless CIA and FBI agents with the help of his peculiar allies—monsters and wall friends."
                ]
            },
            contact: {
                title: "Contact Me",
                description: "Feel free to reach out to me on my social media or via email!"
            },
            tasks: {
                title: "Tasks",
                description: "Task 1: Create a responsive portfolio website. Demonstrate your skills in HTML, CSS, and JavaScript."
            }
        },
        cz: {
            navbar: ["Domů", "O Mně", "Projekty", "Kontakt", "Úkoly"],
            footer: "&copy; 2024 Dominik Grader. Všechna práva vyhrazena.",
            index: {
                title: "Vítejte na mém portfoliu",
                description: "Místo, kde mohu ukázat své dovednosti, projekty a kreativitu s anime tématem!"
            },
            about: {
                title: "O Mně",
                description: "Ahoj, jsem Dominik Grader, student IT na SPŠT. Specializuji se na vývoj webů, vývoj her a programování. Moje zkušenosti zahrnují:",
                skills: [
                    "C++, C#, HTML, JavaScript, CSS, Java",
                    "Základy Pythonu",
                    "Adobe Photoshop, Adobe Illustrator, Adobe Animate, Adobe Premiere Pro",
                    "Unreal Engine, Unity"
                ]
            },
            projects: {
                title: "Moje Projekty",
                description: "Prozkoumejte některé z mých nejlepších prací, včetně projektů pro vývoj webů a her!",
                projectDescriptions: [
                    "Zábavná tower defense hra, kde hlavní hrdina brání svůj domov proti agentům CIA a FBI s pomocí svých neobvyklých spojenců—monster a přátel na zdi."
                ]
            },
            contact: {
                title: "Kontaktujte mě",
                description: "Neváhejte mě kontaktovat na sociálních sítích nebo e-mailem!"
            },
            tasks: {
                title: "Úkoly",
                description: "Úkol 1: Vytvořte responzivní portfolio webu. Předveďte své dovednosti v HTML, CSS a JavaScriptu."
            }
        }
    };

    const lang = isCzech ? 'cz' : 'en';
    const pageTranslations = translations[lang][page];

    // Translate navbar
    const navbarLinks = document.querySelectorAll('.navbar .menu a');
    navbarLinks.forEach((link, index) => {
        link.textContent = translations[lang].navbar[index];
    });

    // Translate footer
    document.querySelector('footer .footer-content p').innerHTML = translations[lang].footer;

    // Translate page content
    if (pageTranslations.title) {
        document.querySelector('h1').textContent = pageTranslations.title;
    }

    if (pageTranslations.description) {
        const p = document.querySelector('.content-block p');
        if (p) p.textContent = pageTranslations.description;
    }

    if (page === 'about') {
        const ul = document.querySelector('.content-block ul');
        if (ul) ul.innerHTML = pageTranslations.skills.map(skill => `<li>${skill}</li>`).join('');
    }

    if (page === 'projects') {
        const projectDescriptions = document.querySelectorAll('.project-text p');
        projectDescriptions.forEach((desc, index) => {
            desc.textContent = pageTranslations.projectDescriptions[index];
        });
    }
});
