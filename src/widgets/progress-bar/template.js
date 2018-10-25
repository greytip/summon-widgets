import styles from './styles';

const templateString = `
<style>
    ${styles}
</style>
<!-- Trigger button/Opens the modal -->
<button class="trigger">Show progress</button>

<!-- The Modal -->
<div id="modal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Modal Header</h2>
    </div>
    <div class="modal-body">
      <h4>
        Progress
      </h4>
      <p id="message"></p>
      <div class="progress">
        <div class="progress-bar"><span class="progress-status" id="progressStatus"></span></div>
      </div>
    </div>
  </div>

</div>
`;

export default templateString;
