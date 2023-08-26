import express from 'express';
import fileUpload from 'express-fileupload';
import { type } from 'os';


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(fileUpload());

app.post('/upload', async (req, res)=>{

   // console.log(req.files);
   let EDFile = req.files.file;
   //console.log(EDFile)
   if(EDFile.mimetype == 'image/png' || EDFile.mimetype == 'image/jpeg'){
    await EDFile.mv(`./files/${EDFile.name}`);
   }else{
    console.log("Error Formato Archivo 1")
   }
   
   let EDFile2 = req.files.file2;
   if(EDFile2.mimetype == 'image/png' || EDFile2.mimetype == 'image/jpeg'){
     await EDFile2.mv(`./files/${EDFile2.name}`);
   }else{
    console.log("Error Formato Archivo 2")
   }

   let EDFile3 = req.files.file3;

   if(EDFile3.mimetype == 'application/pdf' || EDFile3.mimetype == 'image/jpeg'){
     await EDFile3.mv(`./files/${EDFile3.name}`);
   }else{
    console.log("Error Formato Archivo 3")
   }

    res.send("Archivo Recibido") 
})

app.listen(4000,()=>{console.log("Servicio puerto 4000")})