import React from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {UserInfo} from "./Home";
import {getQuestionByLang} from "../json/QuestionData";
import {Chip, Container, List, ListItem, Typography} from "@mui/material";

const Exam = () => {

    const history = useHistory();

    const {state} = useLocation();
    const userInfo = state as UserInfo;

    const filteredQuestion = getQuestionByLang(userInfo.lang);

    const routeToQuestion = (id: number) => {
        history.push(`/question/${id}`);
    }

    return (
        <Container>
            <Typography variant="h4" sx={{margin: "20px 0"}}>Exam</Typography>

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

            <List>
                {
                    filteredQuestion.map((q, i) => (
                        <ListItem
                            key={q.id}
                            onClick={() => routeToQuestion(q.id)}
                            sx={{
                                cursor: "pointer"
                            }}
                        >
                            <span style={{fontSize: "20px", marginRight: "10px"}}>{i + 1}.</span>
                            <span style={{fontSize: "20px"}}>{q.title}</span>
                        </ListItem>
                    ))
                }
            </List>
        </Container>
    );
};

export default Exam;