const app = require('./index');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Greenlife backend listening on port ${PORT}`);
});
