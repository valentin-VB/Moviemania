import { Wraper } from 'components/Trailer/Trailer.styled';

function Trailer({ videos, title }) {
  const findTrailer = () => {
    const trailer = videos.find(video =>
      video.name.toLowerCase().includes('trailer')
    );

    return `http://www.youtube.com/embed/${trailer?.key}`;
  };

  return (
    <Wraper>
      <iframe
        title={title}
        id="ytplayer"
        src={findTrailer()}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; encrypted-media"
      ></iframe>
    </Wraper>
  );
}

export default Trailer;
