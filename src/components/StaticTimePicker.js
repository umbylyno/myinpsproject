import React from "react";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {MobileTimePicker} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";
import {maximumEntrance, minimumEntrance} from "../costants/costants";

function StaticTimePicker(props) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileTimePicker
                minTime={minimumEntrance}
                maxTime={maximumEntrance}
                ampm={false}
                disabled={props.disable}
                label={props.text}
                value={props.time}
                onChange={props.onChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

export default StaticTimePicker;