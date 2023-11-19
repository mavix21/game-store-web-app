export default class Cluster extends HTMLElement {
  constructor() {
    super();
    this.render = () => {
      this.i = `Cluster-${[this.direction, this.justify, this.align, this.space].join('')}`;
      this.dataset.i = this.i;

      if (!document.getElementById(this.i)) {
        const styleEl = document.createElement('style');
        styleEl.id = this.i;
        styleEl.innerHTML = `
        [data-i="${this.i}"] {
          flex-direction: ${this.direction};
          justify-content: ${this.justify};
          align-items: ${this.align};
          gap: ${this.space};
        }
        `.replace(/\s\s+/g, ' ').trim();
        document.head.appendChild(styleEl);
      }
    };
  }

  get direction() {
    return this.getAttribute('direction') || 'row';
  }

  set direction(val) {
    return this.setAttribute('direction', val);
  }

  get justify() {
    return this.getAttribute('justify') || 'flex-start';
  }

  set justify(val) {
    return this.setAttribute('justify', val);
  }

  get align() {
    return this.getAttribute('align') || 'flex-start';
  }

  set align(val) {
    return this.setAttribute('align', val);
  }

  get space() {
    return this.getAttribute('space') || 'var(--s1)';
  }

  set space(val) {
    return this.setAttribute('space', val);
  }

  static get observedAttributes() {
    return ['justify', 'align', 'space'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }
}

if ('customElements' in window) {
  customElements.define('cluster-l', Cluster);
}
