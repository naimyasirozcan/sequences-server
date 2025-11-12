try {
  process.loadEnvFile()
} catch (error) {
  console.log("cannot find .env file, using default values")
}


const jsonServer = require("json-server")

const server = jsonServer.create()

const middlewares = jsonServer.defaults()

server.use(middlewares)

const routes = jsonServer.router("db.json")

server.use(routes)

const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`server active and listening on port: ${PORT}`)
})