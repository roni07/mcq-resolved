export const multipleChoice = "multipleChoice";
export const fillInTheBlank = "fillInTheBlank";
export const multiSelect = "multiSelect";
export const followingMatch = "followingMatch";
export const trueFalse = "trueFalse";

export interface QuestionInfo {
    id: number,
    title: string,
    options: string[],
    matchAns?: string[],
    ans: string[],
    lang: string,
    type: string
}

export const qList: QuestionInfo[] = [
    {
        id: 1,
        type: multipleChoice,
        title: " React is based on?",
        options: [
            "Modules", "Services", "Components", "Microservices"
        ],
        ans: ["Components"],
        lang: "React"
    },
    {
        id: 2,
        type: fillInTheBlank,
        title: "How many elements does a React component return __________?",
        options: ["Single", "Both", "Double", "Multiple"],
        ans: ["Single"],
        lang: "React"
    },
    {
        id: 3,
        type: multiSelect,
        title: "Props are in other components? ",
        options: [
            "Injected", "methods", "Props", "State"
        ],
        ans: ["Injected", "methods"],
        lang: "React"
    },
    {
        id: 4,
        type: followingMatch,
        title: "Match the following",
        options: [
            "js", "ts"
        ],
        matchAns: ["react", "angular"],
        ans: ["js->react", "ts->angular"],
        lang: "React"
    },
    {
        id: 5,
        type: trueFalse,
        title: "Babel is js Compiler?",
        options: [
            "true", "false",
        ],
        ans: ["true"],
        lang: "React"
    },
    {
        id: 6,
        type: multipleChoice,
        title: "HTML uses?",
        options: [
            "defined tags", "specified tagst", "fixed tag", "All above"
        ],
        ans: ["fixed tag"],
        lang: "Html"
    },
    {
        id: 7,
        type: fillInTheBlank,
        title: "HTML Block is known as ___________ ?",
        options: [
            "body", "tag", "Attribute", "Element"
        ],
        ans: ["tag"],
        lang: "Html"
    },
    {
        id: 8,
        type: multiSelect,
        title: "what other tag makes text bold ?",
        options: [
            "<fat>", "<strong>", "<black>", "<b>"
        ],
        ans: ["<strong>", "<b>"],
        lang: "Html"
    },
    {
        id: 9,
        type: trueFalse,
        title: "display a picture in a HTML page using  img?",
        options: [
            "true", "false",
        ],
        ans: ["true"],
        lang: "Html"
    },
    {
        id: 10,
        type: multipleChoice,
        title: "What should be the first tag in any HTML document?",
        options: [
            "head", "title", "html", "document"
        ],
        ans: ["html"],
        lang: "Html"
    }
];

export const getQuestionByLang = (value: string): QuestionInfo[] => {
    return qList.filter((q) => q.lang.toLowerCase() === value.toLowerCase());
}
export const getQuestionById = (id: number): QuestionInfo | undefined => {
    return qList.find((q) => q.id === id);
}