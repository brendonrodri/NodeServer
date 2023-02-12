const http  = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = (req, res){

	res.writeHead(200);
	res.end("lalalala");
};


const server = http.createServer(resquestListener);
server.listen(port, host, ()=>{
	console.log(`Servidor roando em  http://${host}:${port}`);
});
