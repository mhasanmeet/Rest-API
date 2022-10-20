//mongodb schema
const Schema = mongoose.Schema
const demoSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    phone: {
        type: String,
        required: true
    }
})

//create database model 
const Demo = mongoose.model('Demo', demoSchema)

//new route for mongo db demo
app.get('/demo', (req, res) =>{
    const demo = new Demo({
        name: 'Mahmudul Hasan',
        phone: '01612121212'
    })

    demo.save()
        .then(data => {
            res.json({data})
        })
        .catch(err => console.log(err))
})