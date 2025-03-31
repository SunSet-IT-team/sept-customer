import {FormControlLabel} from '@mui/material';
import {FC} from 'react';
import {CheckboxElement} from 'react-hook-form-mui';
import {checkboxStyles, formControlLabelStyles} from './styles';

export const FormCheckbox: FC<{error?: string}> = ({error}) => (
    <FormControlLabel
        control={
            <CheckboxElement
                name="processingDataAccepted"
                color="secondary"
                sx={error ? checkboxStyles : {}}
            />
        }
        label="Согласие на обработку персональных данных"
        sx={formControlLabelStyles}
    />
);
