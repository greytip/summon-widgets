import html from './template';

class ProgressBar extends HTMLElement {
  constructor() {
    super();

    // Attaching a shadow root.
    this.attachShadow({ mode: 'open' });

    // Providing HTML to shadow root.
    this.shadowRoot.innerHTML = html;

    this.modal = null;
  }

  connectedCallback() {
    this.initialize();
  }

  initialize() {
    const trigger = this.shadowRoot.querySelector('.trigger');
    trigger.addEventListener('click', () => this.showModal());

    this.modal = this.shadowRoot.querySelector('.modal');

    this.shadowRoot
      .querySelector('.close')
      .addEventListener('click', () => this.hideModal());

    // TODO: Handle outside click to dismiss modal.
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = (event) => {
    //     if (event.target == modal) {
    //         this.hideModal();
    //     }
    // }
  }

  showModal() {
    this.modal.classList.add('modal-open');
  }

  hideModal() {
    this.modal.classList.remove('modal-open');
  }
}

export default ProgressBar;
