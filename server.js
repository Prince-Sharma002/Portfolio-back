import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongodbCon from './db.js';
import { Project } from './models/project-model.js';
import { Contact } from './models/contact-model.js';


const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials : true,
    method : "GET , POST, PUT, DELETE , PATCH , HEAD",

  }

// middleware
app.use(cors(corsOptions));
app.use( express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
});


app.get('/projects' , async (req, res)=>{
    try{
        const response = await Project.find();
        if( !response ){
            res.status(404).json({message:"No project found" });
            return ;
        }

        res.status(200).json({ data : response });
    }
    catch(err){
        res.json({message : err});
    }
});

app.post('/contact' , async (req, res)=>{
    try{
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message : "message sent successfully"});
    }catch(e){
        console.log(e);
        return res.status(500).json({message : "something went wrong"});
    }
});

mongodbCon().then( ()=>{
    app.listen('5000' , ()=>{
        console.log('server is running on port 5000');
    });
})
