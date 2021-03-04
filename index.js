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
    title: {
        type: String,
        required: true
    },
    content: {
        homeTxt: {
            type: String,
            required: true
        },
        projectTxt: {
            type: String,
            required: true
        }
    },
    imgLinks: {
        img1: {
            type: String,
            required: true
        },
        img2: {
            type: String
        }
    },
    liveLink: {
        type: String
    }
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

Project.findOneAndUpdate({
        title: 'Chat App website'
    }, {
        imgLinks: 'CHANGED TO NOTHING GOOD!'
    }, {
        new: true
    })
    .then(data => {
        console.log(data);
        console.log('IT WORKED!');
    })
    .catch(err => {
        console.log(err)
    });