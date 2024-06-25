const express = require('express')
const app = express()

let events = [
    { id: 1, title: '1984', date: '02/02/2024' },
    { id: 2, title: 'The Great Gatsby', date: '03/02/2024' }
]
app.use(express.json());

app.get('/events', (req, res) => {
    
    if(req.query.title && req.query.date){
        // res.send(`filtering products based on title: ${req.query.title} and date: ${req.query.date}`);
        
        const eventFiltered = events.filter(b => b.title === req.query.title && b.date === req.query.date)
        eventFiltered ? res.send(eventFiltered) : res.send("No events to filter");
        

    }else if(req.query.title){
        // res.send(`filtering products based on title: ${req.query.title}`);
        console.log(req.query.title);
        const eventFiltered = events.filter(b => b.title === req.query.title)
        eventFiltered ? res.send(eventFiltered) : res.send("No events to filter");

    }else if(req.query.date){
        // console.log(req.query.date);
        const eventFiltered = events.filter(b => b.date === req.query.date)
        console.log(eventFiltered);
        eventFiltered ? res.send(eventFiltered) : res.send("No events to filter");
          
        // res.send(`filtering products based on date: ${req.query.date}`);
    }else{
        res.status(200).json(events)
    }
})

app.get('/events/:id', (req, res) => {
    const event = events.find(b => b.id === parseInt(req.params.id))
    if (!event) res.status(404).send('The event was not found')
    res.status(200).json(event)
})

app.post('/events', (req, res) => {
    // const data = req.body;
    // console.log(typeof data);
    if(Object.keys(req.body).length === 2){
        const { title, date } = req.body
        if(title && date){
            // console.log(isNaN(new Date(date)))
            if(isNaN(new Date(date))){ 
                const event = {
                    id: events.length + 1,
                    title,
                    date
                }
                events.push(event)
                res.status(200).send(event)
            }else{
                res.send("Invalid date")
            }
        }else{
            res.send("Invalid input")
        }
    }else{
        res.send("Input data missing")
    }
})

app.put('/events/:id', (req, res) => {

    const event = events.find(b => b.id === parseInt(req.params.id))
    if (!event) res.status(404).send('The event was not found')

    if(Object.keys(req.body).length === 2){
        const { title, date } = req.body
        if(title && date){
            if(isNaN(new Date(date))){ 
                event.title = title
                event.date = date
                res.status(200).send(event)
            }else{
                res.send("Invalid date")
            }
        }else{
            res.send("Invalid input")
        }
    }else{
        res.send("Input data missing")
    }
})

app.delete('/events/:id', (req, res) => {
    const index = events.findIndex(b => b.id === parseInt(req.params.id))
    if (index === -1) res.status(404).send('The event was not found')

    events.splice(index, 1)
    res.status(204).send()
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})