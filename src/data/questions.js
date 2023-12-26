const questions = [
    {
        id: 1,
        question: 'What does DOM stand for?',
        options: ['Document Object Model', 'Data Object Model', 'Document Oriented Model', 'Document Object Manipulation'],
        answer: 'Document Object Model',
    },
    {
        id: 2,
        question: 'Which keyword is used to declare a variable in JavaScript?',
        options: ['var', 'int', 'string', 'variable'],
        answer: 'var',
    },
    {
        id: 3,
        question: 'Which function is used to print something in the console?',
        options: ['console.log( )', 'print( )', 'display( )', 'log( )'],
        answer: 'console.log( )',
    },
    {
        id: 4,
        question: 'What is the correct way to add comments in JavaScript?',
        options: ['/* Comment */', '// Comment', '<!-- Comment -->', '**Comment**'],
        answer: '// Comment',
    },
    {
        id: 5,
        question: 'What is the result of 2 + "2" in JavaScript?',
        options: ['22', '4', 'Error', '32'],
        answer: '22',
    },
];

const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
const shuffledQuestionsWithShuffledOptions = shuffledQuestions.map((question) => ({
    ...question,
    options: question.options.sort(() => Math.random() - 0.5),
}));
export default shuffledQuestionsWithShuffledOptions;