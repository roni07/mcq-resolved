import React from 'react';
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import {QuestionInfo} from "../json/QuestionData";

interface IProps {
    question: QuestionInfo
}

const MultiSelect: React.FC<IProps> = ({question}) => {

    return (
        <FormGroup>
            {
                question.options.map(op => (
                    <FormControlLabel
                        control={<Checkbox/>}
                        label={op}
                    />
                ))
            }
        </FormGroup>
    );
};

export default MultiSelect;