export default class Reel extends HTMLElement {
  constructor () {
    super();
    this.render = () => {
      this.i = `Reel-${[this.itemWidth, this.height, this.space, this.noBar].join('')}`;
      this.dataset.i = this.i;

      if (!document.getElementById(this.i)) {
        const styleEl = document.createElement('style');
        styleEl.id = this.i;
        styleEl.innerHTML = `
          [data-i="${this.i}"] {
            height: ${this.height};
          }

          [data-i="${this.i}"] > * {
            flex: 0 0 ${this.itemWidth};
          }

          [data-i="${this.i}"] > img {
            height: 100%;
            flex-basis: auto;
            width: auto;
          }
        `.replace(/\s\s+/g, ' ').trim();
        document.head.appendChild(styleEl);
      }
    }
  }
}
