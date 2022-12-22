export class LocalStorageManager {
  constructor(ids) {
    this.ids = this.getMovies();
  }

  toogleMovies(id) {
    const idIndex = this.ids.indexOf(id);
    const notInList = idIndex === -1;

    if (notInList) {
      this.ids.push(id);
    } else {
      this.ids.splice(idIndex, 1);
    }

    localStorage.setItem('movieIds', JSON.stringify(this.ids));

    // return !notInList;
  }

  getMovies() {
    const savedIds = localStorage.getItem('movieIds');
    if (!savedIds) {
      return [];
    }

    return JSON.parse(savedIds);
  }

  isAddedToWatchList(id) {
    return this.ids.includes(Number(id));
  }
}
