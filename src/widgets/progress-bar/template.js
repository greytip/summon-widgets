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
      <p>Some text in the Modal Body</p>
      <p>Some other text...</p>
    </div>
    <div class="modal-footer">
      <h3>Modal Footer</h3>
    </div>
  </div>

</div>
`;

export default templateString;
