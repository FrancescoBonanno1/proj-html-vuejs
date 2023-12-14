import { reactive } from 'vue'

export const store = reactive({
    chiave: "valore",

    menu: [{
        title: "Courses",
        position: 0
    },
    {
        title: "Course Formats",
        position: 1
    },
    {
        title: "Add Course",
        position: 2
    },
    {
        title: "Pages",
        position: 3
    },
    {
        title: "Demos",
        position: 4
    },
    ],
    dynamicard: [{
        icon: "fa-solid fa-briefcase",
        title: "Certificated scam",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        icon: "fa-solid fa-rocket",
        title: "Productivity",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        icon: "fa-solid fa-thumbs-up",
        title: "Accelerated Learning",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        icon: "fa-solid fa-gear",
        title: "Useless",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }

    ],
    users: [{
        icon: "fa-solid fa-users",
        number: Math.ceil(Math.random() * 3500),
        text: "Online learner"

    },
    {
        icon: "fa-solid fa-film",
        number: Math.ceil(Math.random() * 25),
        text: "Video Courses"

    },
    {
        icon: "fa-solid fa-image",
        number: Math.ceil(Math.random() * 450),
        text: "sliders and images"

    },
    {
        icon: "fa-solid fa-thumbs-up",
        number: Math.ceil(Math.random() * 1500),
        text: "excellent reviews"

    }],
    coursecard: [{
        image: "src/assets/img/photo-1496307042754-b4aa456c4a2d-370x200.jpeg",
        special: true,
        title: "How to be a dj? Make Electronic Music",
        type: "Electronic",
        signal: "fa-solid fa-signal",
        list: "fa-solid fa-list-ul",
        clock: "fa-solid fa-clock",
        difficulty: "Advanced",
        dimension: "8 Lectures",
        time: "6 Hours",


    },
    {
        image: "src/assets/img/12345-1-740x400.png",
        special: true,
        title: "Nvidia and UE4 Technologies Practice",
        type: "Nvidia",
        signal: "fa-solid fa-signal",
        list: "fa-solid fa-list-ul",
        clock: "fa-solid fa-clock",
        difficulty: "Advanced",
        dimension: "8 Lectures",
        time: "6 Hours",


    },
    {
        image: "src/assets/img/photo-1491897554428-130a60dd4757-740x400.jpeg",
        special: true,
        title: "Fashion Photography from professional",
        type: "Fashion",
        signal: "fa-solid fa-signal",
        list: "fa-solid fa-list-ul",
        clock: "fa-solid fa-clock",
        difficulty: "Advanced",
        dimension: "6 Lectures",
        time: "6 Hours",


    },
    {
        image: "src/assets/img/photo-1416339134316-0e91dc9ded92-740x400.jpeg",
        special: false,
        title: "Design Instrument for Communications",
        type: "Communication",
        signal: "fa-solid fa-signal",
        list: "fa-solid fa-list-ul",
        clock: "fa-solid fa-clock",
        difficulty: "Intermediate",
        dimension: "6 Lectures",
        time: "6 Hours",


    },
    {
        image: "src/assets/img/cathryn-lavery-67852-unsplash-370x200.jpg",
        special: false,
        title: "Make your Concept Right and Beautiful",
        type: "Art",
        signal: "fa-solid fa-signal",
        list: "fa-solid fa-list-ul",
        clock: "fa-solid fa-clock",
        difficulty: "Intermediate",
        dimension: "6 Lectures",
        time: "6 Hours",


    },
    {
        image: "src/assets/img/photo-1475452779376-caebfb988090-740x400.jpeg",
        special: false,
        title: "Road Bike Manual or How to Be a Champion",
        type: "Bicycling",
        signal: "fa-solid fa-signal",
        list: "fa-solid fa-list-ul",
        clock: "fa-solid fa-clock",
        difficulty: "Beginner",
        dimension: "6 Lectures",
        time: "6",


    }],
    students: [{
        img: "src/assets/img/1-100x100.jpg",
        message: "very useless",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        img: "src/assets/img/2-100x100.jpg",
        message: "Paints of the future",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        img: "src/assets/img/4-100x100.jpg",
        message: "A scam well rewarded",
        p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }]

});