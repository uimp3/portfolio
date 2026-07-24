export default {
    webpageTitle: "Portfolio - Edwin Muñoz",
    home: {
        "name": "Edwin Danilo Muñoz",
        "photoUrl": "favicon.svg",
        "intro": "Systems Engineer passionate about backend development and building scalable solutions. Specialized in Python, Django, and Full Stack development with focus on automation and digital transformation.",
        "introHtml": "Systems Engineer passionate about <span class='text-white font-bold'>backend development</span>, <span class='text-white font-bold'>AI</span>, and building <span class='text-white font-bold'>scalable solutions</span>. Specialized in Python, Django, and Full Stack development.",
        "webpageTitle": "Edwin Muñoz - Systems Engineer",
        "resumeUrl": "https://example-files.online-convert.com/document/pdf/example.pdf",

        "_comment": "Add your social links below. Leave the 'url' empty to hide the icon. Set 'showInContact' to true or false to control if it appears in the Contact section.",
        "socials": [
            {
                "name": "GitHub",
                "url": "https://github.com/uimp3",
                "icon": "mdi:github",
                "showInContact": true
            },
            {
                "name": "LinkedIn",
                "url": "https://linkedin.com/in/edmdev",
                "icon": "mdi:linkedin",
                "showInContact": true
            },
            {
                "name": "Email",
                "url": "mailto:edwindanilo1110@gmail.com",
                "icon": "mdi:email",
                "showInContact": true
            },
            {
                "name": "Whatsapp",
                "url": "https://wa.link/5qqplp",
                "icon": "mdi:whatsapp",
                "showInContact": true
            }
        ]
    },
    hero: {
        name: "Edwin Muñoz",
        title: "Systems Engineer",
        subtitle: "Backend Developer | AI | Python"
    },
    
    nav: {
        home: "Home",
        career: "Career",
        projects: "Projects",
        tech: "Technologies",
        contact: "Contact"
    },

    // about: {
    //     title: "About Me",
    //     text: "Systems Engineer with experience in backend and full stack development focused on business process automation, operational optimization, and digital transformation. Strong expertise in Python, Django REST Framework, Spring Boot, Angular, PostgreSQL, Docker, and REST API development, with keen interest in scalable software architecture and AI-driven development tools."
    // },

    career: {
        title: "Career",
        subtitle: "My professional experience and achievements",
        employers: [
            {
                "company": "ECOMINDALA S.A.S.",
                "role": "Full Stack Developer",
                "period": "Oct 2024 - Nov 2025",
                "type": "Full time",
                "description": "Automated coffee reception and transformation processes, reducing operational times by approximately 50%. Designed and developed an inventory management and coffee traceability system using Django. Reduced manual inventory errors by approximately 30%. Participated in development of the company's virtual store.",
                "skills": ["Python", "Django", "Django REST Framework", "PostgreSQL", "Git", "Automation"]
            }
        ]
    },

    projects: {
        title: "Projects",
        subtitle: "A selection of my recent projects",
        descriptions: {
            "portfolio": "My personal portfolio, built with Astro and Tailwind CSS.",
            "Retro-Car-Racing": "A 2D car racing game built with Python and PyGame, inspired by the classic \"Brick Game Classic Car Race\".",
            "TaskManagerIA": "A task manager with AI-assisted features.",
            "CanchasSinteticas": "A management platform for a synthetic sports fields business.",
            "reto_unidad1_edwin_munoz": "A set of solved exercises for the \"Data Science & Data Engineering Fundamentals\" course by Dev Senior Code."
        }
    },

    tech: {
        title: "Technologies",
        subtitle: "Tools and technologies I work with",
        categories: [
            {
                "title": "Languages",
                "skills": [
                    { "name": "Python", "level": 3, "icon": "devicon-plain:python" },
                    { "name": "JavaScript", "level": 2, "icon": "devicon-plain:javascript" },
                    { "name": "Java", "level": 2, "icon": "devicon-plain:java" }
                ]
            },
            {
                "title": "Frameworks & Libraries",
                "skills": [
                    { "name": "Django", "level": 3, "icon": "devicon-plain:django" },
                    { "name": "Django REST Framework", "level": 3, "icon": "devicon-plain:django" },
                    { "name": "Spring Boot", "level": 2, "icon": "devicon-plain:spring" },
                    { "name": "Angular", "level": 2, "icon": "devicon-plain:angularjs" }
                ]
            },
            {
                "title": "Databases",
                "skills": [
                    { "name": "PostgreSQL", "level": 3, "icon": "devicon-plain:postgresql" },
                    { "name": "MySQL", "level": 2, "icon": "devicon-plain:mysql" }
                ]
            },
            {
                "title": "Tools & Platforms",
                "skills": [
                    { "name": "Git", "level": 3, "icon": "devicon-plain:git" },
                    { "name": "Docker", "level": 2, "icon": "devicon-plain:docker" },
                    { "name": "Linux", "level": 2, "icon": "devicon-plain:linux" },
                    { "name": "REST API", "level": 3, "icon": "devicon-plain:fastapi" }
                ]
            },
            {
                "title": "AI & ML",
                "skills": [
                    { "name": "PyTorch", "level": 2, "icon": "devicon-plain:pytorch-wordmark" },
                    { "name": "Deep Learning", "level": 2, "icon": "mdi:brain" },
                    { "name": "NLP", "level": 2, "icon": "mdi:chat-processing" }
                ]
            },
            {
                "title": "Methodologies",
                "skills": [
                    { "name": "Scrum", "level": 3, "icon": "devicon-plain:trello" },
                    { "name": "Kanban", "level": 3, "icon": "devicon-plain:trello" }
                ]
            }
        ]
    },

    contact: {
        title: "Contact",
        subtitle: "Get in touch with me",
        whatsapp: "https://wa.link/5qqplp",
        email: "edwindanilo1110@gmail.com",
        linkedin: "https://www.linkedin.com/in/edmdev",
        github: "https://github.com/uimp3"
    },
    footer: {
        copyright: "© 2024 Edwin Muñoz. All rights reserved.",
        builtWith: "Built with Astro and Tailwind CSS.",
        sourceCode: "Source code available on",
        repo: "https://github.com/uimp3/portfolio"
    }
};