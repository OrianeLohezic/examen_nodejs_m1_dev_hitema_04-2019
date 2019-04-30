const express = require('express');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const bodyParser = require('body-parser');
const v1 = express.Router();
const { digestAuth } = require('../basic-auth/basic-auth');


module.exports = app;
app.use('/api/v1',v1);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// To be implemented!
v1.get('/people', async (request,response)=>{
    const data = await peopleService.getPeople();
    response.send(data);
 });

 v1.put('/people/:id', async (request,response) => {
    const id = parseInt(request.params.id);
    const people = request.body;
    let result = await peopleService.updatePeople(id, people);
    response.sendStatus(result ? 200 : 404);
});

   
