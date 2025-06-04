const http = require('http');
 
const server = http.createServer((req,res)=>{
    res.write('salammmmmmmm')
    res.end()
})
 
server.listen(3030,'127.0.0.1' , ()=>{
console.log('on the work')
})