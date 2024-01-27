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
        description: 'Basic zero-cross game',
        path: 'tic-tac-toe'
    },
    {
        title: 'Todo-App',
        description: 'Basic Task list application with create-read-update-delete-search-bookmark functionality',
        path: 'todo-app'
    },
    {
        title: 'Stopwatch',
        description: 'A watch which can be started/stopped in order to measure exactly how long something takes',
        path: 'stopwatch'
    },
    {
        title: 'show-foods',
        description: 'Show foods along with their categories and recipes',
        path: 'show-foods'
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
    {name: 'In Progress', value: 'in-progress'},
    {name: 'Pending', value: 'pending'},
    {name: 'Completed', value: 'completed'},
    {name: 'Not Started', value: 'not-started'},
    {name: 'On Hold', value: 'on-hold'},
    {name: 'Cancelled', value: 'cancelled'},
    {name: 'Yet to Plan', value: 'yet-to-plan'},
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
}