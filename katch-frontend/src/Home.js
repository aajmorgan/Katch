import React, { useState } from "react"
import { Button, Box, Typography, TextField } from "@mui/material/"
import axios from "axios"

export default function Home () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [show, setShow] = useState("");

    const handleButtonClick = async () => {
        axios.post(
            `http://127.0.0.1:8000/adduser/`, {email: email, name: name}
        ).then(response => {
            setShow({email: email, name: name});
            console.log(response.data)
        }).catch((err) => {
            console.log('what')
        })
    }

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