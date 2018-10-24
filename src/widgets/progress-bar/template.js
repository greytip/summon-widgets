import styles from './styles';

const templateString = `
<style>
    ${styles}
</style>
<!-- Trigger button/Opens the modal -->
<button class="trigger">Show progress</button>

<!-- The Modal -->
<div class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Modal Header</h2>
    </div>
    <div class="modal-body">
      <p>
        Batch Id: <span id="batch-id"></span>
      </p>
      <p>
        Source : <span id="source"></span>
      </p>
      <button id="start">Start</button>
      <p>
        Progress (<span id="progressStatus"></span>)
      </p>
      <div class="progress">
        <div class="progress-bar">
        </div>
      </div>
    </div>
  </div>

</div>
`;

export default templateString;
