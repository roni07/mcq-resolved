import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {
    fillInTheBlank,
    followingMatch,
    getQuestionById,
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
    id?: string
}

const Question = () => {

    const {id} = useParams<IProps>();

    const [question, setQuestion] = useState<QuestionInfo>();

    useEffect(() => {

        const questionById = getQuestionById(Number(id));
        setQuestion(questionById);

    }, [id])

    return (
        question ? (
            <Container>
                <Typography variant="h4" sx={{margin: "20px 0"}}>Question</Typography>
                <Typography variant="h5">{question?.title}</Typography>

                {
                    [multipleChoice, trueFalse, fillInTheBlank].includes(question.type) &&
                    <MultipleChoice question={question}/>
                }

                {
                    question.type === multiSelect &&
                    <MultiSelect question={question}/>
                }

                {
                    question.type === followingMatch &&
                    <FollowingMatch question={question}/>
                }

            </Container>
        ) : <p>Question not found.</p>
    );
};

export default Question;