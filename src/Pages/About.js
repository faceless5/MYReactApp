import React from 'react'
import Footer from '../components/Layout/Footer'
import Nav from '../components/Layout/Nav'
import {Container, Grid, Typography} from '@mui/material'
import { Box, Link } from '@mui/material'

const About = () => {
    return (
        <>
            <Nav />
            <Typography variant='h4' align='center' sx={{ mt: "10px" }}>
                About us
            </Typography>

            <Container maxWidth = 'md'>
                <Typography variant='body1' align='justify'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ipsa animi
                    aperiam voluptatibus adipisci sit praesentium neque. Nulla tempora delectus
                    expedita debitis maiores eligendi, optio at, blanditiis minima rem repellat.

                </Typography>
            </Container>

            <Grid container justifyContent ='space-evenly' p={3} boxShadow={3} mt={3}>
                <Grid item xs='3' boxShadow={3} p={3}>
                <img src='./carousel_img/image1.jpg' style={{height:"200px", width:"100%"}} />
                <Typography variant ='h6' align='center'>Mr. ABC XYZ</Typography>
                <Typography variant ='body1' align='center'>Managing Director</Typography>
               
                <Box display ='flex' justifyContent='space-between'>
                <Typography variant ='body2'>abc@gmail.com</Typography>
                <Typography variant ='body2' align='center'>+9779851012345</Typography>
                </Box>

                <Link href="#" variant='button' align='center'>Portfolio</Link> 
                </Grid>

                <Grid item xs='3' sx= {{backgroundColor:"blue"}}>Second</Grid>
                <Grid item xs='3' sx= {{backgroundColor:"red"}}>Third</Grid>
            </Grid>
            <Footer />
        </>
    )
}

export default About