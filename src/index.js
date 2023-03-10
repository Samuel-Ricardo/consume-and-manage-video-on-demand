import { createServer, request } from 'node:http'

createServer(async (request, response) => {
    
  const headers = {
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Methods': "*",
  }

  if (request.method === 'OPTIONS') {
    response.writeHead(204, headers)
    response.end()
    return;
  }

  response.end("Hello World")
})

.listen(3000, () => console.log("Server Running at 3000"))
