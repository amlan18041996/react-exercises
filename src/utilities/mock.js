export const foods = [
    {
        "name": "Vegetables",
        "value": "veggies",
        "variety": [
            {
                "name": "Brinjal",
                "value": "brinjal",
                "recipes": [
                    {
                        "name": "Eggplant curry",
                        "value": "eggplant_curry"
                    },
                    {
                        "name": "Eggplant fry",
                        "value": "eggplant_fry"
                    },
                    {
                        "name": "Eggplant tawa",
                        "value": "eggplant_tawa"
                    }
                ]
            },
            {
                "name": "Broccoli",
                "value": "broccoli",
                "recipes": [
                    {
                        "name": "Broccoli Soup",
                        "value": "broccoli_soup"
                    },
                    {
                        "name": "Broccoli Creamy",
                        "value": "broccoli_creamy"
                    },
                    {
                        "name": "Broccoli Casserole",
                        "value": "broccoli_csserole"
                    }
                ]
            },
            {
                "name": "Brussels sprouts",
                "value": "sprouts"
            },
            {
                "name": "Cabbage",
                "value": "cabbage",
                "recipes": [
                    {
                        "name": "Manchurian",
                        "value": "manchurian"
                    },
                    {
                        "name": "Cabbage Poriyal",
                        "value": "cabbage_poriyal"
                    }
                ]
            },
            {
                "name": "Cauliflower",
                "value": "cauliflower"
            }
        ]
    },
    {
        "name": "Fruits",
        "value": "fruits",
        "variety": [
            {
                "name": "Banana",
                "value": "banana",
                "recipes": [
                    {
                        "name": "Smoothy",
                        "value": "smoothy"
                    },
                    {
                        "name": "Pancake",
                        "value": "pancake"
                    }
                ]
            },
            {
                "name": "Apple",
                "value": "apple"
            },
            {
                "name": "Grapes",
                "value": "grapes",
                "recipes": [
                    {
                        "name": "Red Grape Cake",
                        "value": "red_grape_cake"
                    },
                    {
                        "name": "Concord Grape Tart",
                        "value": "concord_grape_tart"
                    },
                    {
                        "name": "Grape Focaccia",
                        "value": "grape_focaccia"
                    }
                ]
            },
            {
                "name": "Orange",
                "value": "orange"
            },
            {
                "name": "Guava",
                "value": "guava"
            }
        ]
    },
    {
        "name": "Non Veggies",
        "value": "non_veggies",
        "variety": [
            {
                "name": "Mutton",
                "value": "mutton"
            },
            {
                "name": "Chicken",
                "value": "chicken",
                "categories": [
                    {
                        "name": "Butter Chicken",
                        "value": "butter_chicken"
                    },
                    {
                        "name": "Chicken Tehari",
                        "value": "chicken_tehari"
                    },
                    {
                        "name": "Roasted Chicken",
                        "value": "roasted_chicken"
                    },
                    {
                        "name": "Hariyali Chicken",
                        "value": "hariyali_chicken"
                    }
                ]
            },
            {
                "name": "Fish",
                "value": "fish",
                "recipes": [
                    {
                        "name": "Lemon Butter Garlic Fish",
                        "value": "lemon_butter_garlic_fish"
                    },
                    {
                        "name": "Fish Kabiraji",
                        "value": "fish_kabiraji"
                    },
                    {
                        "name": "Fish Butter Fry",
                        "value": "fish_butter_fry"
                    },
                    {
                        "name": "Fish Curry",
                        "value": "fish_curry"
                    },
                    {
                        "name": "Steamed Fish",
                        "value": "steamed_fish"
                    }
                ]
            },
            {
                "name": "Shrimps",
                "value": "shrimps",
                "recipes": [
                    {
                        "name": "Honey Garlic Shrimp",
                        "value": "honey_garlic_shrimp"
                    },
                    {
                        "name": "Shrimp Skewers",
                        "value": "shrimp_skewers"
                    },
                    {
                        "name": "Shrimp Ceviche",
                        "value": "shrimp_ceviche"
                    }
                ]
            }
        ]
    }
];

export const projects = [
    {
        title: 'Tic-Tac-Toe',
        image: 'https://picsum.photos/200/300',
        description: 'Basic zero-cross game',
        path: 'tic-tac-toe',
        link: {
            'github.com': 'https://github.com/amlan18041996'
        }
    },
    {
        title: 'Todo App',
        image: 'https://picsum.photos/200/300',
        description: 'Basic Task list application with create-read-update-delete-search-bookmark functionality',
        path: 'todo-app',
        link: {
            'github.com': 'https://github.com/amlan18041996'
        }
    },
    {
        title: 'Stopwatch',
        image: 'https://picsum.photos/200/300',
        description: 'A watch which can be started/stopped in order to measure exactly how long something takes',
        path: 'stopwatch',
        link: {
            'github.com': 'https://github.com/amlan18041996'
        }
    },
    {
        title: 'Show Foods',
        image: 'https://picsum.photos/200/300',
        description: 'Show foods along with their categories and recipes',
        path: 'show-foods',
        link: {
            'github.com': 'https://github.com/amlan18041996'
        }
    }
];

export const players = {
    firstPlayer: {
        type: "string",
        value: "X",
        error: [],
        validate: false,
        condition: {},
    },
    secondPlayer: {
        type: "string",
        value: "O",
        error: [],
        validate: false,
        condition: {},
    },
    gameMode: {
        type: "string",
        value: "three*three",
        error: [],
        validate: false,
        condition: {},
    }
};

export const registerForm = {
    firstName: {
        type: "string",
        value: "",
        error: [],
        validate: true,
        condition: { required: true, maxLength: 10 },
    },
    lastName: {
        type: "string",
        value: "",
        error: [],
        validate: true,
        condition: { required: true, maxLength: 10 },
    },
    email: {
        type: "email",
        value: "",
        error: [],
        validate: true,
        condition: { required: true },
    },
    phone: {
        type: "number",
        value: "",
        error: [],
        validate: true,
        condition: { required: true },
    },
    password: {
        type: "string",
        value: "",
        error: [],
        validate: true,
        condition: {
            required: true,
            minLength: 6,
            maxLength: 10,
            specialChar: true,
        },
    },
    confirmPassword: {
        type: "string",
        value: "",
        error: [],
        validate: true,
        condition: { required: true, match: "password" },
    },
};

export const loginForm = {
    email: {
        type: "email",
        value: "",
        error: [],
        validate: true,
        condition: { required: true },
    },
    password: {
        type: "string",
        value: "",
        error: [],
        validate: true,
        condition: {
            required: true,
            minLength: 6,
            maxLength: 10,
            specialChar: true,
        },
    },
};

export const todoStatuses = [
    { name: 'In Progress', value: 'in-progress' },
    { name: 'Pending', value: 'pending' },
    { name: 'Completed', value: 'completed' },
    { name: 'Not Started', value: 'not-started' },
    { name: 'On Hold', value: 'on-hold' },
    { name: 'Cancelled', value: 'cancelled' },
    { name: 'Yet to Plan', value: 'yet-to-plan' },
];

export const todoForm = {
    title: {
        type: "string",
        value: "",
        error: {},
        validate: true,
        condition: { required: true, minLength: 5 },
    },
    description: {
        type: "string",
        value: "",
        error: {},
        validate: true,
        condition: { required: true, minLength: 10, maxLength: 200 },
    },
    status: {
        type: "string",
        value: "",
        error: {},
        validate: true,
        condition: { required: true, minLength: 5, maxLength: 15 },
    }
};

export const TodoActions = {
    CREATE_TODO: "CREATE_TODO",
    VIEW_TODO: "VIEW_TODO",
    UPDATE_TODO: "UPDATE_TODO",
    DELETE_TODO: "DELETE_TODO",
    BOOKMARK_TODO: "BOOKMARK_TODO",
    RESET_THREAD: "RESET_THREAD",
    RESET_TODOS: "RESET_TODOS",
};

export const workExp = [
    {
        name: 'UG INFO Systems',
        duration: 'Jul 2017 — Mar 2021',
        designation: 'Full Stack Developer',
        description: [
            'Created an extension for social media platform for WhatsApp and WeChat with the objective of capturing and monitoring messages between Relationship-Managers & their appointed clients to enhance the client experience.',
            'Created a chat application as Bespoke with including features like,\n Integrated WeChat & WhatsApp( via Twilio ) & Line API`s onto the chat where clients can message with their day-day social chat platforms as well.,\n Integrated Socket.io to transmit & receive runtime messages.,\n Integrated a custom AI bot to resolve some basic queries of clients with the help of Botman, DialogFlow.',
            'User management application with multiple roles like Managers, Clients, Relationship Managers, Admin, Developer with specific authorized features ( Built on top of Angular 2 ).',
            'Responsible for building the architecture & user-interface for creating the flow for the interaction between coaches/trainees & their appointed pupils. Payment Integration system like Stripe & video sharing/capturing features like Zoom were used in this platform.',
            'Webcrawling extension with the objective of capturing certain text or images or videos and exporting it as PDF/DOC using python with Core JS.'
        ]
    },
    {
        name: 'TIC Retail Accessories India Pvt Ltd',
        designation: 'Software Engineer',
        duration: 'Apr 2021 — Sep 2022',
        description: [
            'Made `Customer Portal` frontend for users who can check their product status for Repair or Replace case [ Built on React JS ] along with handling multiple cases such as Authentication, Authorization, 2 Factor Authentication using either email or sms. Participated in creating some of the microservices using symfony.',
            'Responsible for Field-Component Design module where CX team can create and manage their components directly from the UI. It`s UI was built on top of React JS but for Core JS was utilized for the Drag & Drop functionality',
            'Migrating a antiquated project built on ( Symfony & Angular ) to ( Lumen & React JS )'
        ]
    },
    {
        name: ' GSPANN',
        duration: 'Oct 2022 — Present',
        designation: 'Senior Software Engineer',
        description: [
            'Created the whole architectural flow of frontend based on Vue JS, VueUse & Pinia',
            'Responsible for creating user-management-profile page',
            'Responsible for creating checkout flow',
            'Responsible for creating home-page',
            'Dialog level design with multiple options for creating and designing the component on AEM 6.5',
            'Developed own custom libraries such as data-table, carousel, toast',
            'Building AEM Franklin`s multi level blocks & templates for the UI differentiated among multi opcos/brands'
        ]
    },
];

export const testimonials = [
    {
        name: 'Michael - Technical Manager',
        designation: 'Marketing @ APPLE INC.',
        comments: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
        rating: 3.5,
        date: 'September 5, 2022'
    },
    {
        name: 'Morty - Engagement Manager',
        designation: 'Sales @ INTEL INC.',
        comments: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        rating: 3,
        date: 'April 17, 2021'
    },
    {
        name: 'Jerry - Manager',
        designation: 'Finance @ SPLASH INC.',
        comments: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source',
        rating: 5,
        date: 'March 7, 2021'
    },
    {
        name: 'Rick - Delivery Manager',
        designation: 'Marketing @ APPLE INC.',
        comments: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable.',
        rating: 2,
        date: 'October 21, 2020'
    }
];

export const articles = [
    {
        title: 'Crafting a design system for a multiplanetary future',
        commentCounts: 6,
        description: 'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
        rating: 3.5,
        date: 'September 5, 2022',
        url: 'https://google.com'
    },
    {
        title: 'Introducing Animaginary: High performance web animations',
        commentCounts: 2,
        description: 'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
        rating: 3,
        date: 'September 2, 2022',
        url: 'https://facebook.com'
    },
    {
        title: 'Rewriting the cosmOS kernel in Rust',
        commentCounts: 16,
        description: 'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
        rating: 4,
        date: 'July 14, 2022',
        url: 'https://google.com'
    },
    {
        title: 'In a free hour, when our power of choice is untrammelled',
        commentCounts: 42,
        description: 'A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature',
        rating: 4.5,
        date: 'June 8, 2022',
        url: 'https://orkut.com'
    },
    {
        title: 'Et harum quidem rerum facilis est et expedita distinctio',
        commentCounts: 2,
        description: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus',
        rating: 5,
        date: 'August 22, 2022',
        url: 'https://gmail.com'
    },
    {
        title: 'Occasionally circumstances occur in which toil',
        commentCounts: 10,
        description: 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences',
        rating: 3.5,
        date: 'November 3, 2022',
        url: 'https://linkedIn.com'
    },
];

export const popularArticles = [
    {
        title: 'Rewriting the cosmOS kernel in Rust',
        commentCounts: 16,
        description: 'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
        rating: 4,
        date: 'July 14, 2022',
        url: 'https://google.com'
    },
    {
        title: 'Occasionally circumstances occur in which toil',
        commentCounts: 10,
        description: 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences',
        rating: 3.5,
        date: 'November 3, 2022',
        url: 'https://linkedIn.com'
    },
    {
        title: 'Introducing Animaginary: High performance web animations',
        commentCounts: 2,
        description: 'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
        rating: 3,
        date: 'September 2, 2022',
        url: 'https://facebook.com'
    },
];

export const recentArticles = [
    {
        title: 'Rewriting the cosmOS kernel in Rust',
        commentCounts: 16,
        description: 'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
        rating: 4,
        date: 'July 14, 2022',
        url: 'https://google.com'
    },
    {
        title: 'Occasionally circumstances occur in which toil',
        commentCounts: 10,
        description: 'To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences',
        rating: 3.5,
        date: 'November 3, 2022',
        url: 'https://linkedIn.com'
    },
    {
        title: 'Introducing Animaginary: High performance web animations',
        commentCounts: 2,
        description: 'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
        rating: 3,
        date: 'September 2, 2022',
        url: 'https://facebook.com'
    },
];
