
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
width: 100%;
background: url(https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) 55%;
height: 70vh;
display: flex;
object-fit:contain;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
        </Image>
    )
}

export default Banner;