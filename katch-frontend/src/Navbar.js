import { Box, Typography } from "@mui/material";


export default function Navbar () {
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