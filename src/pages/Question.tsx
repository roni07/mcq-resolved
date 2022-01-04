import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getQuestionById, QuestionInfo} from "../json/QuestionData";
import {Container, Typography} from "@mui/material";
import MultipleChoice from "../components/MultipleChoice";

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
                    question.type === "multipleChoice" &&
                    <MultipleChoice question={question}/>
                }

            </Container>
        ) : <p>Question not found.</p>
    );
};

export default Question;