import React from "react";
import {Box} from "@mui/material";
import {logo} from "../costants/costants";

export const Logo = () => <Box sx={{
    paddingTop: 3,
    textAlign: "center",
}}>
    <img src={logo} alt="logo" width={200} height={150}/>
</Box>

