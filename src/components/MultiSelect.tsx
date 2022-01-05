import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import {QuestionInfo} from "../json/QuestionData";

interface IProps {
    handleAns(option: string, checked: boolean): void,

    isAns(option: string): boolean,

    question: QuestionInfo
}

const MultiSelect: React.FC<IProps> = ({handleAns, isAns, question}) => {

    return (
        <FormGroup>
            {
                question.options.map(op => (
                    <FormControlLabel
                        key={op}
                        control={<Checkbox
                            checked={isAns(op)}
                            onChange={(e) => handleAns(op, e.target.checked)}
                        />}
                        label={op}
                    />
                ))
            }
        </FormGroup>
    );
};

export default MultiSelect;