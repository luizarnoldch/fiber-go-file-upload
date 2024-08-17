console.log("JavaScript is connected!");

document.getElementById('uploadForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const messageDiv = document.getElementById('message');

  fetch(form.action, {
    method: form.method,
    body: formData
  })
    .then(response => response.text())
    .then(data => {
      messageDiv.innerHTML = `<p style="color: green;">${data}</p>`;
    })
    .catch(error => {
      messageDiv.innerHTML = `<p style="color: red;">Failed to upload file: ${error.message}</p>`;
    });
});
