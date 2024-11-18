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
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createSnowflakes = () => {
        particles = Array.from({ length: 100 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            speed: Math.random() * 1 + 0.5,
        }));
    };
    createSnowflakes();

    const drawSnowflakes = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'white';
        ctx.beginPath();
        particles.forEach((p) => {
            ctx.moveTo(p.x, p.y);
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        });
        ctx.fill();
    };

    const updateSnowflakes = () => {
        particles.forEach((p) => {
            p.y += p.speed;
            if (p.y > canvas.height) {
                p.y = -p.radius;
                p.x = Math.random() * canvas.width;
            }
        });
    };

    const animateSnow = () => {
        drawSnowflakes();
        updateSnowflakes();
        requestAnimationFrame(animateSnow);
    };
    animateSnow();
}

// Language Toggle Script
const languageToggle = document.getElementById('languageToggle');
if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        const currentLang = languageToggle.textContent;
        const isCzech = currentLang === 'CZ';
        languageToggle.textContent = isCzech ? 'EN' : 'CZ';

        const page = document.body.getAttribute('data-page');
        if (!page) {
            console.error("Missing data-page attribute on body.");
            return;
        }

        const translations = {
            en: {
                navbar: ["Home", "About Me", "Projects", "Contact", "Tasks"],
                footer: "&copy; 2024 GD. All rights reserved.",
                about: {
                    title: "About Me",
                    content: "Hi, I'm Dominik Grader, an IT student at SPŠT. I specialize in web development, game development, and programming. My experience includes:",
                    list: [
                        "C++, C#, HTML, JavaScript, CSS, Java",
                        "Basics of Python",
                        "Adobe Photoshop, Adobe Illustrator, Adobe Animate, Adobe Premiere Pro",
                        "Unreal Engine, Unity"
                    ]
                },
                contact: {
                    title: "Contact Me",
                    content: "Feel free to reach out to me on my social media or via email!"
                }
            },
            cz: {
                navbar: ["Domů", "O Mně", "Projekty", "Kontakt", "Úkoly"],
                footer: "&copy; 2024 GD. Všechna práva vyhrazena.",
                about: {
                    title: "O Mně",
                    content: "Ahoj, jmenuji se Dominik Grader, jsem student IT na SPŠT. Specializuji se na webový vývoj, vývoj her a programování. Moje zkušenosti zahrnují:",
                    list: [
                        "C++, C#, HTML, JavaScript, CSS, Java",
                        "Základy Pythonu",
                        "Adobe Photoshop, Adobe Illustrator, Adobe Animate, Adobe Premiere Pro",
                        "Unreal Engine, Unity"
                    ]
                },
                contact: {
                    title: "Kontaktujte Mě",
                    content: "Neváhejte mě kontaktovat na mých sociálních sítích nebo e-mailem!"
                }
            }
        };

        const lang = isCzech ? 'cz' : 'en';
        const translation = translations[lang];

        // Translate navbar
        const navbarLinks = document.querySelectorAll('.navbar .menu a');
        navbarLinks.forEach((link, index) => {
            link.textContent = translation.navbar[index];
        });

        // Translate footer
        const footerText = document.querySelector('footer .footer-content p');
        if (footerText) footerText.innerHTML = translation.footer;

        // Translate sections
        if (page === 'about') {
            document.querySelector('.content-block h1').textContent = translation.about.title;
            document.querySelector('.content-block p').textContent = translation.about.content;
            const listItems = document.querySelectorAll('.content-block ul li');
            listItems.forEach((item, index) => {
                item.textContent = translation.about.list[index];
            });
        } else if (page === 'contact') {
            document.querySelector('.content-block h1').textContent = translation.contact.title;
            document.querySelector('.content-block p').textContent = translation.contact.content;
        }
    });
}

