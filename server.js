const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
