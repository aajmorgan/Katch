import React, { useState } from "react"
import { Button, Box, Typography, TextField } from "@mui/material/"

export default function Home () {

    const [email, setEmail] = useState("");
    const [show, setShow] = useState("");

    const Navbar = () => {
        return (
            <Box sx={{
                width:"100vw",
                height:"10vh",
                bgcolor:"black",
                color:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Typography fontSize={30}>K A T C H</Typography>
            </Box>
        )
    }

    return (
        <Box>
            <Navbar />
            <Box 
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="75vh"                
            >
                <Typography mr={2}>Enter Email: </Typography>
                <TextField 
                    size="small"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button 
                    variant="contained"
                    onClick={() => setShow(email)}
                >Submit</Button>
            </Box>
            <Typography>{show}</Typography>
        </Box>
    )
}