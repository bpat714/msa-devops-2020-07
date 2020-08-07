import React, { useState } from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Button, Grid } from '@material-ui/core';
import { IUserInput } from '../../Common/Interfaces'
import './SearchBar.css';

interface ISearchBarProps {
    SetUserInput: (a: IUserInput) => void;
}


function SearchBar(props: ISearchBarProps) {
    const [SetDate, setSetDate] = useState<Date | null>(
        new Date('2018-08-18'),
    );
    const handleStartDateChange = (date: Date | null) => {
        setSetDate(date);
    };

    const handleSubmit = () => {

            let UserInput: IUserInput = {
                SetDate: SetDate
            }
            props.SetUserInput(UserInput);


    }
    
    return <div className="SearchBarContainer">
        <Grid container spacing={3}>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={6} sm={3}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="StartDate"
                        label="Select a Date"
                        value={SetDate}
                        onChange={handleStartDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>

            <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>
        </Grid>
    </div>
}

export default SearchBar