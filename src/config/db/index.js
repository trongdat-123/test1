const mongoose = require('mongoose');


async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Education_Dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('True')
    } catch (error) {
        console.log('fail')

    }
}

module.exports = { connect }