import { noop } from '../../utils';
/**
 * An event queue which enqueue and dequeue events with a duration.
 *
 * @class EventQueue
 */
export default class EventQueue {
  /**
   * EventQueue constructor.
   * @param {*} duration minimum time for the event to be in queue.
   * @param {*} dequeueCb callback invoked when an event is dequeued.
   */
  constructor(duration = 100, dequeueCb = noop) {
    this.duration = duration;
    this.dequeueCb = dequeueCb;

    this._events = [];
    this._intervalId = null;
  }

  /**
   *
   *
   * @readonly
   * @memberof EventQueue
   */
  get isEmpty() {
    return this._events.length === 0;
  }

  /**
   * Returns true if queue is dequeuing.
   *
   * @readonly
   * @memberof EventQueue
   */
  get isDequeuing() {
    return this.intervalId !== null;
  }

  /**
   *
   *
   * @memberof EventQueue
   */
  get intervalId() {
    return this._intervalId;
  }

  /**
   *
   *
   * @memberof EventQueue
   */
  set intervalId(value) {
    this._intervalId = value;
  }

  /**
   *
   *
   * @param {*} events
   * @memberof EventQueue
   */
  enqueue(events) {
    this._events = [...this._events, ...events];

    if (this.isDequeuing || this.isEmpty) {
      return;
    }

    this.intervalId = setInterval(() => {
      if (this.isEmpty) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        return;
      }
      this.dequeue();
    }, this.duration);
  }

  /**
   *
   */
  dequeue() {
    const event = this._events.shift();
    this.dequeueCb(event);
    return event;
  }
}
