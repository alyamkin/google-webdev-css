// const checkboxAll = document.getElementById('all');
// const checkboxes = document.querySelectorAll('input');
// const checkboxesNotAll = [...checkboxes].filter(
//   (checkbox) => checkbox.getAttribute('id') !== 'all'
// );

// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener('change', ({ target }) => {
//     if (target.getAttribute('id') === 'all') {
//       checkboxes.forEach((checkbox) => (checkbox.checked = target.checked));
//     } else if (
//       checkboxesNotAll.filter((checkbox) => checkbox.checked).length !==
//       checkboxesNotAll.length
//     ) {
//       checkboxAll.indeterminate = true;
//     } else {
//       checkboxAll.indeterminate = false;
//       checkboxAll.checked = true;
//     }
//   });
// });
