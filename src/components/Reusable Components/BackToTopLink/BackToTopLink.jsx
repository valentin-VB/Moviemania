import { RxDoubleArrowUp } from 'react-icons/rx';
import { Link } from './BackToTopLink..styled';

function BackToTopLink({ inView }) {
  return (
    !inView && (
      <Link href="#top">
        <RxDoubleArrowUp></RxDoubleArrowUp>
      </Link>
    )
  );
}

export default BackToTopLink;
