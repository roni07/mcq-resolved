import React from 'react';
import {Table, TableBody, TableCell, TableRow} from "@mui/material";
import {QuestionInfo} from "../json/QuestionData";

interface IProps {
    handleAns(option: string): void,

    isAns(arg: string): boolean,

    question: QuestionInfo
}

const FollowingMatch: React.FC<IProps> = ({handleAns, isAns, question}) => {

    return (
        <Table style={{width: "400px", margin: "auto"}}>
            <TableBody>
                <TableRow>
                    <TableCell/>
                    {
                        question.matchAns?.map(ans => <TableCell key={ans}>{ans}</TableCell>)
                    }
                </TableRow>

                {
                    question.options.map(op =>
                        <TableRow key={op}>
                            <TableCell>{op}</TableCell>
                            {
                                question.matchAns?.map(ans =>
                                    <TableCell key={ans}>
                                        <input
                                            onChange={e => handleAns(op + "->" + e.target.value,)}
                                            type="radio"
                                            name={op}
                                            value={ans}
                                        />
                                    </TableCell>
                                )
                            }
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    );
};

export default FollowingMatch;