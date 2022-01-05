import React from 'react';
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {QuestionInfo} from "../json/QuestionData";

interface IProps {
    handleAns(option: string): void,

    isAns(option: string): boolean,

    question: QuestionInfo
}

const MultipleChoice: React.FC<IProps> = ({handleAns, isAns, question}) => {
    return (
        <RadioGroup
            name="radio-buttons-group"
            onChange={(e) => handleAns(e.target.value)}
        >
            {
                question.options.map(op => (
                    <FormControlLabel
                        key={op}
                        value={op}
                        control={<Radio
                            checked={isAns(op)}
                        />}
                        label={op}
                    />
                ))
            }
        </RadioGroup>
    );
};

export default MultipleChoice;