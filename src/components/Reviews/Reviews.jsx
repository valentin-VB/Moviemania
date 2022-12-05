import { Box } from 'components/Reusable Components/Box';
import { List, ListItem, Text } from 'components/Reviews/Reviews.styled';
import { Heading } from 'pages/MovieDetails/MovieDetails.styled';
import { useOutletContext } from 'react-router-dom';

function Reviews() {
  const [movieDetails] = useOutletContext();
  const reviews = movieDetails.reviews.results;
  console.log('reviews', reviews);

  if (reviews.length === 0) {
    return (
      <Box as="p" p="16px" color="white" fontWeight="400">
        No review for this movie yet
      </Box>
    );
  }

  return (
    <List>
      {reviews.map(review => (
        <ListItem>
          <Heading>{review.author}</Heading>
          <Text>{review.content}</Text>
        </ListItem>
      ))}
    </List>
  );
}

export default Reviews;
