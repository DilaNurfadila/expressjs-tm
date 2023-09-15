<!-- Basic Server Syntax -->

const express = require('express');

<!-- init express -->

const app = express();

<!-- Create your endpoints/route handlers -->

app.get('/', function(req, res) {
res.send('Hello World');
});

<!-- Listen on a port -->

app.listen(5000);

<!-- =============================== -->
<!-- Basic Route Handling -->

app.get('/', function(req, res) {
<!-- Fetch from database -->
<!-- Load pages -->
<!-- Return JSON -->
<!-- Full access to request 4 responses -->
})
