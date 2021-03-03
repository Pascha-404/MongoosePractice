const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gokseniaDB', {
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
        projectTxt: String
    },
    imgLinks: {
        img1: String,
        img2: String
    },
    liveLink: String
});

const Project = mongoose.model('Project', projectShema);

const chatAppWeb = new Project({
    title: 'Chat App website',
    content: {
        homeTxt: 'This is a homepage design and build for a concept project - a chat application. I have designed the page first then later built a responsive page in Webflow',
        projectTxt: 'This is a homepage design and build for a concept project - a chat application. I have designed the page first then later built a responsive page in Webflow'
    },
    imgLinks: {
        img1: '/img/chatApp.png'
    },
    liveLink: 'https://chatapp-5671f6.webflow.io'
})