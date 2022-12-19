import { RxDoubleArrowUp } from 'react-icons/rx';
import { Link } from './BackToTopLink..styled';

function BackToTopLink({ inView }) {
  return (
    !inView && (
      <Link
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <RxDoubleArrowUp></RxDoubleArrowUp>
      </Link>
    )
  );
}

export default BackToTopLink;
