import React from 'react';
import {
    fillInTheBlank,
    followingMatch,
    multipleChoice,
    multiSelect,
    QuestionInfo,
    trueFalse
} from "../json/QuestionData";
import {Container, Typography} from "@mui/material";
import MultipleChoice from "../components/MultipleChoice";
import MultiSelect from "../components/MultiSelect";
import FollowingMatch from "../components/FollowingMatch";

interface IProps {
    handleAns(option: string, checked?: boolean): void,

    isAns(option: string): boolean,

    question: QuestionInfo
}

const Question: React.FC<IProps> = ({handleAns, isAns, question}) => {

    return (
        question ? (
            <Container>
                <Typography variant="h4" sx={{margin: "20px 0"}}>Question</Typography>
                <Typography variant="h5">{question?.title}</Typography>

                {
                    [multipleChoice, trueFalse, fillInTheBlank].includes(question.type) &&
                    <MultipleChoice handleAns={handleAns} isAns={isAns} question={question}/>
                }

                {
                    question.type === multiSelect &&
                    <MultiSelect handleAns={handleAns} isAns={isAns} question={question}/>
                }

                {
                    question.type === followingMatch &&
                    <FollowingMatch handleAns={handleAns} isAns={isAns} question={question}/>
                }

            </Container>
        ) : <p>Question not found.</p>
    );
};

export default Question;