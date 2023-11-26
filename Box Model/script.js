(function () {
  const toggleSwitch = document.querySelector('.toggle__element');
  const toggleLabel = document.querySelector('.toggle__label');

  toggleSwitch.addEventListener('change', () => {
    let state = toggleSwitch.checked ? 'ON' : 'OFF';
    toggleLabel.innerHTML = state;
  });
})();
