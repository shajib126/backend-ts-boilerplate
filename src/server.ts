import mongoose from "mongoose";
import {Server} from 'http'
import config from "./app/config";
import app from "./app";

let server:Server

async function main(){
    try {
        await mongoose.connect(config.db as string)
        server = app.listen(config.port,()=>{
            console.log(`server running in ${config.port}`);
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

main()

process.on('unhandledRejection',(err)=>{
    console.log(`unhandledRejection is detected, shutting down...`, err);
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
    process.exit(1)
})


process.on('uncaughtException',()=>{
    console.log(`uncaughtException is detected, shutting down...`);
    
})