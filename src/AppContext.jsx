import React, { createContext } from 'react'

export const Storage = createContext()

const AppContext = ({ children }) => {
    let experience = [
        {
            period: '2023 - Current',
            company: 'Merida Tech Minds',
            role: 'Web Developer',
            description: [`In my current role, I manage full-stack web development projects, specializing in both frontend and backend development. For the frontend, I leverage React to create dynamic, responsive user interfaces, while on the backend, 
                I utilize Express to build robust APIs and server-side logic. I’m also responsible for hosting and deployment, 
                using GoDaddy for domain management and Hostinger’s VPS server for hosting, including managing SSH root access 
                for running Python and Express-based projects.` , `In addition to my technical work, I engage with clients to gather project requirements and ensure alignment with their vision. This includes participating in client meetings to discuss project details, offering technical solutions,
                 and delivering a product that meets both functional and business goals.` ]
        }, {
            period: '2023 - Current',
            company: 'Merida Tech Minds',
            role: 'Web Developer',
            description: [
                `I manage full-stack web development projects, handling both frontend (React) and backend (Express). I oversee hosting and deployment, using GoDaddy for domain management and Hostinger’s VPS for hosting, including SSH access for running Python and Express projects. Additionally, I work closely with clients, 
                gathering requirements, attending meetings, and ensuring project goals are met.`
            ]

        }
    ]
    let projects = [
        {
            title: 'Merida Tech Minds Websites',
            category: 'Website',
            img: '../Assset/meridatechMindsHome.png',
            description: `Developed a fully responsive website from the ground up using React.js, ensuring optimal performance and an 
intuitive user experience across all devices. The project involved the implementation of a modern, clean UI, and 
interactive components to enhance user engagement.`
        },
        {
            title: 'Daily activity Sheet',
            category: 'Software',
            img: '../Assset/dasHome.png',
            description: `Developed a fully responsive website from the ground up using React.js, ensuring optimal performance and an 
intuitive user experience across all devices. The project involved the implementation of a modern, clean UI, and 
interactive components to enhance user engagement.`
        },
        {
            title: 'Skill Learning Academy Websites',
            category: 'Website',
            img: '../Assset/skilllearningHome.png',
            description: `Developed a fully responsive website from the ground up using React.js, ensuring optimal performance and an 
intuitive user experience across all devices. The project involved the implementation of a modern, clean UI, and 
interactive components to enhance user engagement.`
        },
        {
            title: 'Printlele E-Commerce',
            category: 'Website',
            img: '../Assset/printleleHome.png',
            description: `Developed a fully responsive website from the ground up using React.js, ensuring optimal performance and an 
intuitive user experience across all devices. The project involved the implementation of a modern, clean UI, and 
interactive components to enhance user engagement.`
        },
        {
            title: 'Printlele E-Commerce',
            category: 'Website',
            img: '../Assset/skilllearningHome.png',
            description: `Developed a fully responsive website from the ground up using React.js, ensuring optimal performance and an 
        intuitive user experience across all devices. The project involved the implementation of a modern, clean UI, and 
        interactive components to enhance user engagement.`
        },
    ]
    let value = { projects, experience }
    return (
        <Storage.Provider value={value} >
            {children}
        </Storage.Provider>
    )
}

export default AppContext