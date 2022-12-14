export function intObserverManager({
  movieCard,
  hasNextPage,
  isLoading,
  addPage,
  intObserver,
}) {
  if (isLoading) {
    return;
  }
  if (intObserver.current) {
    intObserver.current.disconnect();
  }

  if (movieCard) {
    intObserver.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage) {
        addPage();
      }
    });

    intObserver.current.observe(movieCard);
  }
}
