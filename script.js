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
        const isCzech = currentLang === 'CZ';

        const page = document.body.getAttribute('data-page');
        if (!page) {
            console.error("Missing data-page attribute on body.");
            return;
        }

            en: {
                navbar: ["Home", "About Me", "Projects", "Contact", "Tasks"],
                footer: "&copy; 2024 GD. All rights reserved."
            },
            cz: {
                navbar: ["Domů", "O Mně", "Projekty", "Kontakt", "Úkoly"],
                footer: "&copy; 2024 GD. Všechna práva vyhrazena."
            }
        };

        const lang = isCzech ? 'cz' : 'en';

        // Translate navbar
        const navbarLinks = document.querySelectorAll('.navbar .menu a');
        navbarLinks.forEach((link, index) => {
        });

        // Translate footer
        const footerText = document.querySelector('footer .footer-content p');
    });
}


const pageTranslations = {
    en: {
        about: {
            header: "About Me",
            content: "Hi, I'm Dominik Grader, an IT student at SPŠT. I specialize in web development, game development, and programming. My experience includes:",
            list: ["C++, C#, HTML, JavaScript, CSS, Java", "Basics of Python", "Adobe Photoshop, Adobe Illustrator, Adobe Animate, Adobe Premiere Pro", "Unreal Engine, Unity"]
        },
        contact: {
            header: "Contact Me",
            content: "Feel free to reach out to me on my social media or via email!"
        }
    },
    cz: {
        about: {
            header: "O Mně",
            content: "Ahoj, jsem Dominik Grader, student IT na SPŠT. Specializuji se na webový vývoj, vývoj her a programování. Moje zkušenosti zahrnují:",
            list: ["C++, C#, HTML, JavaScript, CSS, Java", "Základy Pythonu", "Adobe Photoshop, Adobe Illustrator, Adobe Animate, Adobe Premiere Pro", "Unreal Engine, Unity"]
        },
        contact: {
            header: "Kontakt",
            content: "Neváhejte mě kontaktovat na mých sociálních sítích nebo e-mailem!"
        }
    }
};

const updatePageContent = (lang) => {
    const page = document.body.getAttribute('data-page');
    if (!page) return;

    const content = pageTranslations[lang]?.[page];
    if (content) {
        // Update main header
        const header = document.querySelector('main .content-block h1');
        if (header) header.textContent = content.header;

        // Update main paragraph
        const paragraph = document.querySelector('main .content-block p');
        if (paragraph) paragraph.textContent = content.content;

        // Update list items if available
        const list = document.querySelector('main .content-block ul');
        if (list && content.list) {
            list.innerHTML = content.list.map(item => `<li>${item}</li>`).join('');
        }
    }
};

// Extend language toggle event
        updatePageContent(isCzech ? 'cz' : 'en');
    });
}