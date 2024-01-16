 const jsonServer= require ('json-server')
//  create server using json-se
const meadiaplayer= jsonServer.create()
// create path to db.json file
const router = jsonServer.router('db.json')

// middlewares to convert js to json
const middleware = jsonServer.defaults()

// connect/use middleware and router in server
meadiaplayer.use(middleware)
meadiaplayer.use(router)

// setup port for the server(json server3000 run)
const port =5000 || process.env.PORT

// to listen server for resolving request
meadiaplayer.listen(port,()=>{
    console.log(`meadiaplayer start at ${port} and ready fetch request`);
})