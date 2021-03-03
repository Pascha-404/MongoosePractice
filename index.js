const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/goksenia', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connection open!');
    })

    .catch(e => {
        console.log('connection broke')
        console.log(e)
    });

const projectShema = new mongoose.Schema({
    title: String,
    content: {
        homeTxt: String,
        projextTxt: String
    },
    imgLinks: {
        img1: String,
        img2: String
    },
    liveLink: String
});

const Project = mongoose.model('Project', projectShema);