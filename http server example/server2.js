const http = require('http');
const fs = require('fs').promises;

http.createServer(async(req, res)=> {
    try{
        const data = await fs.readFile('./server2.html'); //파일을 전달 할 수도 있음.
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        res.end(data);
    }catch(err){
        console.error(err);
        res.writeHead(500, {'Content-type' : 'text/html; charset=utf-8'});
        res.end(err, message);
    }
})

.listen(8081, ()=> {
    console.log('8081포트에서 서버 대기 중');
})