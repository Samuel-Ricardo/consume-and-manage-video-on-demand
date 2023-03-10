import { createServer, request } from 'node:http'

createServer(async (request, response) => {
  response.end("Hello World")
})

.listen(3000, () => console.log("Server Running at 3000"))
