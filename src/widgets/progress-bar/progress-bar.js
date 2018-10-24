import html from './template';
import { getStatus } from './progress.service';

/**
 * Attributes which we'll be provided by consumer.
 */
const options = ['batch-id', 'source'];

class ProgressBar extends HTMLElement {
  constructor() {
    super();

    // Attaching a shadow root.
    this.attachShadow({ mode: 'open' });

    // Providing HTML to shadow root.
    this.shadowRoot.innerHTML = html;

    this.modal = null;
    this.options = null;
  }

  connectedCallback() {
    this.init();
  }

  init() {
    this.initAttributes();
    this.initUi();
  }

  initUi() {
    const trigger = this.shadowRoot.querySelector('.trigger');
    trigger.addEventListener('click', () => this.showModal());
    this.modal = this.shadowRoot.querySelector('.modal');

    this.progressBar = this.shadowRoot.querySelector('.progress-bar');
    this.progressStatus = this.shadowRoot.getElementById('progressStatus');

    this.shadowRoot
      .querySelector('.close')
      .addEventListener('click', () => this.hideModal());

    // Display attributes to ui.
    options.forEach((name) => {
      this.shadowRoot.getElementById(name).innerHTML = this.options[name];
    });

    // TODO: Remove is after demo.
    this.shadowRoot
      .getElementById('start')
      .addEventListener('click', () => this.poll());

    this.setProgress(0);

    // TODO: Handle outside click to dismiss modal.
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = (event) => {
    //     if (event.target == modal) {
    //         this.hideModal();
    //     }
    // }
  }

  initAttributes() {
    this.options = options.reduce((attrs, name) => {
      return {
        ...attrs,
        [name]: this.getAttribute(name) || 'null'
      };
    }, {});
  }

  showModal() {
    this.modal.classList.add('modal-open');
  }

  hideModal() {
    this.modal.classList.remove('modal-open');
  }

  setProgress(value) {
    value = value.toString().includes('%') ? value : `${value}%`;
    this.progressBar.style.width = value;
    this.progressStatus.innerHTML = value;
  }

  poll() {
    console.log('Polling...');
    getStatus().then((value) => {
      console.log('Value', value);
      value = value >= 100 ? 100 : value;
      this.setProgress(value);
      if (value === 100) {
        console.log('Poll completed.');
        return;
      }
      setTimeout(() => this.poll(), 1000);
    });
  }
}

export default ProgressBar;
