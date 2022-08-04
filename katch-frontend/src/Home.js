import React, { useState } from "react"
import { Button, Box, Typography, TextField } from "@mui/material/"
import axios from "axios"

export default function Home ({ setSubmit }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [show, setShow] = useState("");

    const handleButtonClick = async () => {
        axios.post(
            `http://127.0.0.1:8000/adduser/`, {email: email, name: name}
        ).then(response => {
            setShow({email: email, name: name});
            console.log(response.data);
            setSubmit(true);
        }).catch((err) => {
            console.log('what');
            console.log(err.data)
        })
    }

    return (
        <Box>
            <Box 
                display="grid"
                justifyContent="center"
                alignItems="center"
                height="75vh"                
            >
                <Box display="flex">
                    <Typography mr={2}>Enter Name:</Typography>
                    <TextField 
                        size="small"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Box>
                <Box display="flex">
                    <Typography mr={2}>Enter Email: </Typography>
                    <TextField 
                        size="small"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                <Button 
                    variant="contained"
                    onClick={handleButtonClick}
                >Submit</Button>
            </Box>
            <Typography>{JSON.stringify(show)}</Typography>
        </Box>
    )
}