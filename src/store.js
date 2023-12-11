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
    ]

});