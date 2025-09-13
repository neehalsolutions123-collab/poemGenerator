document.getElementById('keywordForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Gather all input values
  const keyword = document.getElementById('keyword').value;
  const style = document.getElementById('poemStyle').value;
  const length = document.getElementById('poemLength').value;
  const mood = document.getElementById('poemMood').value;
  
  // Create the payload with additional options
  const payload = {
    keyword: keyword,
    style: style,
    length: length,
    mood: mood
  };

  // POST the payload to your webhook
  fetch('https://thotaavinash.app.n8n.cloud/webhook/5b042e76-4d3e-4c80-9a7a-b67a0e191aa8', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.text())
  .then(text => {
    localStorage.setItem('webhookResponse', text);
    window.location.href = 'results.html';
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Check the console for details.');
  });
});
