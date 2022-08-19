import React from 'react'
import Footer from '../components/Layout/Footer'
import Nav from '../components/Layout/Nav'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

const Blogs = () => {
    return (
        <>
            <Nav />
            <Typography variant='h4' align='center' sx={{ mt: "10px" }}>
                Blogs
            </Typography>

            <Box className="blogs_container" mt={5} backgroundColor='skyblue' p={'30px'}>
                <Box className='blog' display='flex' backgroundColor='white' p='20px' borderRadius='20px'>
                    <Box className='blog_content' width='80%'>
                        <Box className ='blog_title'>
                         <Typography variant='h5' fontWeight={'bold'} gutterBottom='true'
                         sx={{textDecoration:"underline"}} color='secondary'>
                             Blog_Title</Typography>
                             </Box>
                             {/*<hr width=10%}/>  */}

                        <Box className='blog_text' px={'30px'}><Typography variant='body1' align='justify'>
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        </Typography></Box>
                       
                    </Box>
                    <Box className="blog_author width='20%">
                        <Box className='blogger_img' width={'200px'} boxShadow='3'
                         borderRadius='50%' overflow='hidden'>
                            <img src='./carousel_img/image1.jpg' width='100%'></img>
                        </Box>
                        <Box className='blogger_name'>
                            <Typography variant='h6' align='right'>Mr. ABC blogger</Typography></Box>
                    </Box>
                </Box>


                <Box className='blog' display='flex' backgroundColor='white' p='20px' borderRadius='20px' mt={5}>
                    <Box className='blog_content' width='40%'>
                        <Box className ='blog_title'>
                         <Typography variant='h5' fontWeight={'bold'} gutterBottom='true'
                         sx={{textDecoration:"underline"}} color='secondary'>
                             Blog_Title</Typography>
                             </Box>
                             {/*<hr width=10%}/>  */}

                        <Box className='blog_text' px={'30px'}><Typography variant='body1' align='justify'>
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        </Typography></Box>  
                    </Box>

                    <Box className="blog_author" width='20%'>
                        <Box className='blogger_img' width={'200px'} boxShadow='3'
                         borderRadius='50%' overflow='hidden'>
                            <img src='./carousel_img/image1.jpg' width='100%'></img>
                        </Box>
                        <Box className='blogger_name'>
                            <Typography variant='h6' align='right'>Mr. ABC blogger</Typography></Box>
                    </Box>
                    <Box className='blog_content' width='40%'>
                             {/*<hr width=10%}/>  */}

                        <Box className='blog_text' px={'30px'}><Typography variant='body1' align='justify'>
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        This is a blog text for testing.This is a blog text for testing.This is a blog text for testing.
                        </Typography></Box>
                       
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Blogs