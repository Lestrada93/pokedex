class Pagination {
  constructor(total = 0, limit = 50) {
    this.total = total;
    this.limit = limit;
    this.totalPages = Math.ceil(this.total / this.limit);
    this.activePage = 1;
  }

  getPagesAvailable() {
    const numberOfPages = [];

    for (let i = Math.max(1, this.activePage - 2);
      i <= Math.min(this.activePage + 2, this.totalPages);
      i += 1) {
      numberOfPages.push(i);
    }

    return numberOfPages;
  }

  setActivePage(page) {
    this.activePage = page;
  }

  getActivePage() {
    return this.activePage;
  }

  getTotalPages() {
    return this.totalPages;
  }
}

export default Pagination;
