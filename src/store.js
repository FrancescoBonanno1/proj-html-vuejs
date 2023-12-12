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

    }]

});