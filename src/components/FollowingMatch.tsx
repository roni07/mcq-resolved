import React from 'react';
import {Table, TableCell, TableRow} from "@mui/material";
import {QuestionInfo} from "../json/QuestionData";

interface IProps {
    question: QuestionInfo
}

const FollowingMatch: React.FC<IProps> = ({question}) => {

    return (
        <Table style={{width: "400px", margin: "auto"}}>
            <TableRow>
                <TableCell/>
                {
                    question.matchAns?.map(ans => <TableCell key={ans}>{ans}</TableCell>)
                }
            </TableRow>

            {
                question.options.map(op =>
                    <TableRow>
                        <TableCell>{op}</TableCell>
                        {
                            question.matchAns?.map(ans =>
                                <TableCell>
                                    <input
                                        type="radio"
                                        name={op}
                                        value={op}
                                    />
                                </TableCell>
                            )
                        }
                    </TableRow>
                )
            }

        </Table>
    );
};

export default FollowingMatch;