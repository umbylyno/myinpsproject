import React from "react";
import {Box} from "@mui/material";
import {logo} from "../costants/costants";

export const Logo = () => <Box
    sx={{
        marginTop:5,
        textAlign: "center",
    }}>
    <img src={logo} alt="logo"
         width={180}
         height={180}
         style={{
            borderRadius: 200,
        }}/>
</Box>

