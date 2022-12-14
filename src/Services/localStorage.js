export class LocalStorageManager {
  constructor(ids) {
    this.ids = this.getMovies();
  }

  toogleMovies(id) {
    console.log('до', this.ids);
    if (this.ids.includes(id)) {
      const idIndex = this.ids.indexOf(id);
      console.log('idIndex', idIndex);
      this.ids.splice(idIndex, 1);
    } else {
      this.ids.push(id);
    }
    console.log('після', this.ids);
    localStorage.setItem('movieIds', JSON.stringify(this.ids));
  }

  getMovies() {
    const savedIds = localStorage.getItem('movieIds');
    if (!savedIds) {
      return [];
    }

    return JSON.parse(savedIds);
  }

  isAddedToWatchList(id) {
    if (this.ids.includes(id)) {
      return 'active';
    }

    return null;
  }
}
