try {
  process.loadEnvFile()
} catch (error) {
  console.log("cannot find .env file, using default values")
}

// importing packages 

const jsonServer = require("json-server")
const multer = require("multer")
const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary")


// introducing ourself to cloudinary server with the key 

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// creating a cloudinary storage ({BASE_URL}/upload)

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'sequences',  // Cloudinary'de sequences klasörüne kaydedecek
    allowed_formats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
  }
})

// setting cloudinary storage as multer storage 

const upload = multer({ storage: storage })

// other configs 

const server = jsonServer.create()

const middlewares = jsonServer.defaults()

server.use(middlewares)

const routes = jsonServer.router("db.json")

server.use(routes)

// setting an endpoint (/upload)

server.post('/upload', upload.single('image'), (req, res) => {
  
  // if there is a problem with file upload:
  
  // (req represents all info comes from client as request, req.file is the file that we wanted to post to thi end point .)

  // (res represents all info goest to client as response, client can reach res.json by using res.data)
  try {
    if (!req.file) { //req,file representes the file that we converted to formData and sent there
      return res.status(400).json({ 
        success: false, 
        error: 'file is not uploaded succesfully' 
      })
    }

    //note: headers {contenttype : bla blabla } indicates the type of the data that you created on client side and set as a formData, it can be boundary multiple/dorm-data or other things, images counts multiple/form-data, this info requires to be parsed and solved but axious and multer does it automaticaly
    

    res.json({
      success: true,
      imageUrl: req.file.path  // we send these properties with res.json, then client can reach these info via res.data.imageUrl
    })
    
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    })
  }
})




const PORT = process.env.PORT

server.listen(PORT, () => {
    console.log(`server active and listening on port: ${PORT}`)
})