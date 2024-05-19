import express from 'express';

export class Server {
    private app = express();
    
    async start(){
       //* Middelwares

       //* Public Folder
        this.app.use( express.static('public' ));

        this.app.listen(3001, () => {
            console.log(`Server running on por ${ 3001 }`);
        })

    }

}

