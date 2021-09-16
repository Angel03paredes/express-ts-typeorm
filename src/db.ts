import path from 'path'
import {createConnection,  Connection} from "typeorm";


export async function connection(){
  try{
    await createConnection({
        type: "mssql",
        host: "localhost",
        port: 1433,
        username: "sa",
        password: "12345678",
        database: "graphqlts",
        entities: [
            path.join(__dirname, '/entity/**/**.ts') //.ts in dev and .js when start script
          ],
          synchronize:true,
          "options": {
            "encrypt": false,
            "enableArithAbort": true
            }
        
    });
  }catch(error){
      console.error(error)
  }
}

