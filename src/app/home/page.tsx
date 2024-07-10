'use client';
import styled from '@emotion/styled';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';

// export const generateStaticParams = () => [{ slug: [''] }];

// export const getStaticProps = async (context) => ({
//   props: {},
// });

const StyledApp = styled.div``;

export default function Page() {
  return (
    <StyledApp>
      <Container>
        <Card variant="outlined" sx={{ marginY: '1rem' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://next.mui.com/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Container>
    </StyledApp>
  );
}
