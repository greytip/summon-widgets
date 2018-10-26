import html from './template';
import { getStatus } from './progress.service';
import EventQueue from './event-queue';
import { parseTemplateString } from '../../utils';

/**
 * Interval at which status is fetched.
 */
const POLL_INTERVAL = 1000; // in ms

/**
 * Minimum time for an event to be in the queue.
 */
const EVENT_QUEUE_TIME = 100; // in ms

/**
 * Attributes which we'll be provided by consumer.
 */
const options = {
  jobId: 'job-id',
  source: 'source'
};

class ProgressBar extends HTMLElement {
  constructor() {
    super();

    // Attaching a shadow root.
    this.attachShadow({ mode: 'open' });

    // Providing HTML to shadow root.
    this.shadowRoot.innerHTML = html;

    this._progress = 0;

    this.options = null;

    this.eventQueue = null;
  }

  get statusSource() {
    const source = this.getAttribute(options.source);
    if (source === null) {
      throw new Error('No source provided for status.');
    }

    const jobId = this.getAttribute(options.jobId);
    return parseTemplateString(source, { [options.jobId]: jobId });
  }

  /**
   * Status/event message which will be displayed to the user.
   *
   * @memberof ProgressBar
   */
  set message(value) {
    this.shadowRoot.getElementById('message').innerHTML = value;
  }

  /**
   * Sets the progress.
   *
   * @memberof ProgressBar
   */
  set progress(value) {
    this._progress = value;
    value = `${value}%`;
    this.progressBar.style.width = value;
    this.progressStatus.innerHTML = value;
  }

  /**
   *
   *
   * @readonly
   * @memberof ProgressBar
   */
  get maxProgress() {
    return 100;
  }

  /**
   *
   *
   * @memberof ProgressBar
   */
  get progress() {
    return this._progress;
  }

  get isModalOpen() {
    return this.shadowRoot
      .getElementById('modal')
      .classList.contains('modal-open');
  }

  getErrorMessage(error = {}) {
    const message =
      error.message || 'Something is not right. Will retry in sometimes.';
    return `<span class="text-error">${message}</span>`;
  }

  /**
   * Invoked when element is inserted to DOM.
   *
   * @memberof ProgressBar
   */
  connectedCallback() {
    this.init();
    this.eventQueue = new EventQueue(
      EVENT_QUEUE_TIME,
      this.eventDequeueCb.bind(this)
    );
  }

  init() {
    this.initUi();
  }

  initUi() {
    const trigger = this.shadowRoot.querySelector('.trigger');
    trigger.addEventListener('click', () => this.onTrigger());

    this.progressBar = this.shadowRoot.querySelector('.progress-bar');
    this.progressStatus = this.shadowRoot.getElementById('progressStatus');

    this.shadowRoot
      .querySelector('.close')
      .addEventListener('click', () => this.toggleModal());

    this.progress = 0;

    // TODO: Handle outside click to dismiss modal.
    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = (event) => {
    //     if (event.target == modal) {
    //         this.hideModal();
    //     }
    // }
  }

  onTrigger() {
    this.toggleModal();
    this.poll();
  }

  toggleModal() {
    return this.shadowRoot
      .getElementById('modal')
      .classList.toggle('modal-open');
  }

  poll() {
    getStatus(this.statusSource)
      .then(
        (status) => {
          const percent =
            status.percent >= this.maxProgress
              ? this.maxProgress
              : status.percent;
          this.progress = percent;

          this.eventQueue.enqueue(status.events);

          if (percent === this.maxProgress) {
            this.message = 'Completed.';
          }
        },
        (error) => {
          console.error(error);
          this.message = this.getErrorMessage(error);
        }
      )
      .finally(() => {
        if (this.progress === this.maxProgress) {
          // Completed.
          return;
        }
        setTimeout(() => this.poll(), POLL_INTERVAL);
      });
  }

  eventDequeueCb(event) {
    this.message = event.message;
  }
}

export default ProgressBar;
