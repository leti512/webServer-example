import request from 'supertest';
import { testServer } from '../../test-server';

describe('Todo route testing', () => {
    beforeAll(async()=> {
        await testServer.start();
    })
    test('should return TODOs api/todos', async () => {
        //La instancia de nuestro server (app)
        const response = await request( testServer.app )
         .get('/api/todos')
         //.expect( 200 )
        
         console.log(response.body)
    })
})