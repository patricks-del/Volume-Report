// Get elements
const form = document.getElementById('myForm');
const msg = document.getElementById('msg');
const iframe = document.getElementById('hidden_iframe');
let submitted = false;

// Handle form submission
form.addEventListener('submit', (e) => {
  // prevent accidental double submissions
  if (submitted) {
    e.preventDefault();
    return;
  }

  submitted = true;

  // Disable submit button
  form.querySelector('button').disabled = true;

  // Hide the form and show "submitting" message
  form.classList.add('hidden');
  msg.classList.remove('hidden');
  msg.textContent = 'Submitting…';
});

// Detect when hidden iframe finishes loading after POST
iframe.addEventListener('load', () => {
  if (!submitted) return; // Ignore initial iframe load

  msg.textContent = 'Thanks! Your response was submitted and recorded.';

});
