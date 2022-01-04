import React from 'react';
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {QuestionInfo} from "../json/QuestionData";

interface IProps {
    question: QuestionInfo
}

const MultipleChoice: React.FC<IProps> = ({question}) => {
    return (
        <RadioGroup
            name="radio-buttons-group"
            onChange={() => console.log()}
        >
            {
                question.options.map(op => (
                    <FormControlLabel
                        key={op}
                        value={op}
                        control={<Radio
                            // checked={true}
                        />}
                        label={op}
                    />
                ))
            }
        </RadioGroup>
    );
};

export default MultipleChoice;