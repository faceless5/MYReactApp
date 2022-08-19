import React from 'react'
import Footer from '../components/Layout/Footer'
import Nav from '../components/Layout/Nav'
import {Typography,Box, Container} from '@mui/material'
import {TextField, Button} from '@mui/material'

const Contact = () => {
    return (
        <>
            <Nav />

            <Typography variant='h4' align='center' sx={{ mt: "10px" }}>
                Contact
            </Typography>

            <Container>
            <Box className='contact-container' display='flex' p={3}>
                <Box className='contact-address'width='40%'>
                    <Typography variant='h5' fontWeight='bold' sx={{textDecoration:'underline'}}>Our Store</Typography>
                    <Typography variant='h6'>Kathmandu,Nepal</Typography>
                    <Typography variant='h6'>Phone: +977 985102452</Typography>
                    <Typography variant='h6'>email: ourstore@gmail.com</Typography>
                    <Typography variant='h6'>website: www.ourstore.com</Typography>
                    
                </Box>
                <Box className='contact-form' width='60%'>
                    <TextField label='email'  variant='outlined' required='true' sx={{mb:'10px'}} fullWidth='true'></TextField>
                    <br/>
                    <TextField label='Subject'  variant='outlined' sx={{mb:'10px'}} fullWidth='true'></TextField>
                    <br/>
                    <TextField label='message' multiline maxRows={4} variant='outlined'
                     sx={{mb:'10px'}} helperText='enter your message' fullWidth='true'></TextField>
                     <br/> 
                     <Button variant='contained' fullWidth='true'>Submit</Button>
                </Box>
            </Box>
            </Container>

            <Container>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2404031396477!2d85.31271801493091!3d27.709862782790918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1648402697950!5m2!1sen!2snp" 
             allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width='100%' height={'450px'}></iframe>
            </Container>

            <Footer />
        </>
    )
}

export default Contact