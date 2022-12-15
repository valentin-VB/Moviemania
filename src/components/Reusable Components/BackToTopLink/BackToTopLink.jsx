import React, { useState } from 'react';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { Link } from './BackToTopLink..styled';

function BackToTopLink({ firstElRef }) {
  const [isIntersect, setIsIntersect] = useState(false);

  let option = {
    root: null,
    threshold: [0],
    rootMargin: '100px',
  };

  const backToTopIntObserver = new IntersectionObserver(entries => {
    entries[0].isIntersecting ? setIsIntersect(false) : setIsIntersect(true);
  }, option);

  if (firstElRef.current) {
    backToTopIntObserver.observe(firstElRef.current);
  }

  return (
    isIntersect && (
      <Link href="#top">
        <RxDoubleArrowUp></RxDoubleArrowUp>
      </Link>
    )
  );
}

export default BackToTopLink;
