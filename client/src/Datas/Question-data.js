export const quiz = {
    totalQuestions: 5,
    perQuestionScore: 1,
    questions: [
        {
            question: "HTML code is used to",
            choices: [
                "draw",
                "work with databases",
                "structure the content of a webpage",
                "None of the above",
            ],
            correctAnswer: "structure the content of a webpage",
        },
        {
            question: "What is the correct extension for HTML files?",
            choices: [".htm", ".txt", ".exe", ".html"],

            correctAnswer: ".html",
        },
        {
            question: "Which main parts does the HTML file consist of?",
            choices: [
                "haeder and footer",
                "hands and feet",
                "head and body",
                "All of the above",
            ],
            correctAnswer: "head and body",
        },
        {
            question: "Choose the correct HTML for largest heading",
            choices: ["<head>", "<h1>", "<h6>", "<header>"],
            correctAnswer: "<h1>",
        },
        {
            question:
                "Which of the following is the correct HTML5 element for playing video files",
            choices: ["<media>", "<video>", "<play>", "<movie>"],
            correctAnswer: "<video>",
        },
    ],
};
