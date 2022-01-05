import React from 'react';
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import {UserInfo} from "./Home";
import {getQuestionByLang} from "../json/QuestionData";
import {Chip, Container, Typography} from "@mui/material";
import Question from "./Question";

interface IProps {
    id?: string
}

const Exam = () => {

    const history = useHistory();

    const {state} = useLocation();
    const userInfo = state as UserInfo;

    const filteredQuestion = getQuestionByLang(userInfo.lang)

    const routeToQuestion = (id: number) => {
        history.push(`/exam/${id}`, userInfo);
    }

    const handleAns = () => {
        console.log("hello");
    }

    return (
        <Container>
            <Typography
                onClick={() => {
                    history.push(`/exam`, userInfo);
                }}
                variant="h4" sx={{margin: "20px 0"}}
            >
                {userInfo.lang} Exam
            </Typography>

            {
                filteredQuestion.map((q, i) => (
                    <Chip
                        onClick={() => routeToQuestion(q.id)}
                        sx={{marginRight: "10px", cursor: "pointer"}}
                        key={q.id}
                        label={i + 1}
                    />
                ))
            }

            <Switch>
                <Route exact path="/exam">
                    <h3>Please click on a question number.</h3>
                </Route>
                <Route path="/exam/:id" component={Question}/>
            </Switch>

        </Container>
    );
};

export default Exam;