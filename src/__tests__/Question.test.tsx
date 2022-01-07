import React from 'react';
import {render, screen} from '@testing-library/react';
import Question from "../pages/Question";
import {QuestionInfo} from "../json/QuestionData";

test('renders question', () => {

    const question: QuestionInfo = {
        id: 1,
        title: "string",
        options: [""],
        matchAns: [""],
        ans: [""],
        lang: "string",
        type: ""
    }

    const isAns = () => {
        return false;
    }

    const handAns = () => {
        console.log("handle ans")
    }

    render(<Question question={question} isAns={isAns} handleAns={handAns}/>);
    const questionElement = screen.getByTestId("question");
    expect(questionElement).toBeInTheDocument();
});
