const express = require('express');
const app = express();

app.use(express.json())

let notes = [
    {
      id: "1",
      content: "HTML is easy",
      important: true
    },
    {
      id: "2",
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: "3",
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ];

const unknownEndpoint = (request, response) => {
response.status(404).send({error: 'unknown endpoint'});
}

app.use(unknownEndpoint);


app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>');
});

app.get('/api/notes', (request, response) => {
    response.json(notes);
});

app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id;
    const note = notes.find(note => note.id === id);
    if(note) {
        response.json(note);
    } else {
        response.status(404).end();
    }
});

const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => Number(n.id)))
        : 0;
    return String(maxId + 1);
}

app.post('/api/notes', (request, response) => {
    const body = request.body;

    if(!body.content) {
        return response.status(400).json({
            error: 'cotent missing'
        });
    }

    const note = {
        content: body.content,
        important: body.important || false,
        id: generateId(),
    }
    
    notes = notes.concat(note);
    console.log(note);
    response.json(note);
});

app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id;
    notes = notes.filter(note => note.id !== id);
    response.status(204).end();
});


let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
];

app.get('/api/person', (request, response) => {
    response.json(persons);
});

app.get('/info', (request, response) => {
    const now = new Date();
    response.send(`<p>Phonebook has info ${persons.length} for people</p>
        <p>${now.toUTCString()}</p>`);
});

app.get('/api/person/:id', (request, response) => {
    const id = request.params.id;
    const person = persons.find(p => p.id === id);
    if (person) {
        response.json(person)
    } else {
        response.json(404).end();
    }
});

app.delete('/api/person/:id', (request, response) => {
    const id = request.params.id;
    persons = persons.filter(p => p.id !== id);
    response.status(204).end();
});

const generatePersonId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(n => Number(n.id))) : 0;
    return String(maxId + 1);
}

app.post('/api/person', (request, response) => {
    const body = request.body;
    if(!body.name && !body.age) {
        return response.status(400).json({
            error: 'content missing',
        });
    }
    
    let exists = persons.filter(p => p.name === body.name);
    console.log(exists);
    
    if(exists.length > 0) {
        return response.status(400).json({
            error: 'name must be unique'
        });
    }

    const person = {
        id: generatePersonId(),
        name: body.name,
        number: body.number,
    };

    persons = persons.concat(person);
    // console.log(persons);
    response.json(person);
});







const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});










