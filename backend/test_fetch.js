const http = require('http');

const data = JSON.stringify({ email: 'test', password: 'test' });
const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/auth/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let resData = '';
  res.on('data', (chunk) => resData += chunk);
  res.on('end', () => {
    console.log('STATUS: ' + res.statusCode);
    console.log('BODY: ' + resData.substring(0, 100));
  });
});
req.on('error', (err) => console.log('Error: ' + err.message));
req.write(data);
req.end();
