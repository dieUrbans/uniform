import { r as registerInstance, c as createEvent, h, H as Host } from './index-4f6a2e7b.js';

const uPaginationCss = ":host{--tw-bg-opacity:1;background-color:rgba(209, 250, 229, var(--tw-bg-opacity));height:100%}.page{padding:0.25rem}.selected{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(96, 165, 250, var(--tw-text-opacity))}";

let UPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.pageChange = createEvent(this, "pageChange", 7);
    this.showPages = 1;
    this.showButtons = true;
    this.showLastAndFirstPage = true;
    this.currentPage = 1;
  }
  async goToPage(page, eventless = false) {
    this.changePage(page, eventless);
  }
  changePage(page, eventless = false) {
    if (page > this.pages)
      this.currentPage = this.pages;
    else if (page < 1)
      this.currentPage = 1;
    else
      this.currentPage = page;
    if (!eventless)
      this.pageChange.emit(this.currentPage);
  }
  render() {
    return (h(Host, null, h("u-group", null, this.showButtons && (h("u-button", { rounded: "left", onClick: () => this.changePage(this.currentPage - 1), disabled: this.currentPage <= 1 }, "<")), Array(this.pages)
      .fill(0)
      .map((_, i) => {
      const page = i + 1;
      if (this.showLastAndFirstPage && page === 1) {
        return [
          h("u-button", { rounded: this.showButtons
              ? 'none'
              : page === 1
                ? 'left'
                : page === this.pages
                  ? 'right'
                  : 'none', onClick: () => this.changePage(page), design: page === this.currentPage ? 'primary' : 'secondary' }, page),
          this.currentPage > 3 && h("span", null, " \u2022")
        ];
      }
      const showPage = () => {
        if (page >= this.currentPage - this.showPages &&
          page <= this.currentPage + this.showPages)
          return true;
        if (this.currentPage === 1 && this.showPages * 2 + 1 >= page)
          return true;
        if (this.currentPage === this.pages &&
          this.pages - this.showPages * 2 <= page)
          return true;
        return false;
      };
      if (showPage()) {
        return (h("u-button", { design: page === this.currentPage ? 'primary' : 'secondary', onClick: () => this.changePage(page), rounded: this.showButtons
            ? 'none'
            : this.currentPage - this.showPages - page === 0
              ? 'left'
              : page === 1
                ? 'left'
                : this.currentPage - this.showPages - page ===
                  -2 * this.showPages
                  ? 'right'
                  : page === this.pages
                    ? 'right'
                    : 'none' }, page));
      }
      if (this.showLastAndFirstPage && page === this.pages) {
        return [
          this.currentPage < this.pages - 2 && h("span", null, " \u2022"),
          h("u-button", { rounded: this.showButtons
              ? 'none'
              : page === 1
                ? 'left'
                : page === this.pages
                  ? 'right'
                  : 'none', onClick: () => this.changePage(page), design: page === this.currentPage ? 'primary' : 'secondary' }, page)
        ];
      }
      return null;
    }), this.showButtons && (h("u-button", { rounded: "right", onClick: () => this.changePage(this.currentPage + 1), disabled: this.currentPage >= this.pages }, ">")))));
  }
};
UPagination.style = uPaginationCss;

export { UPagination as u_pagination };
