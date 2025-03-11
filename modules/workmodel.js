const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    darbo_tipas: {
        type: String,
        required: [true, 'you forgot to write the type of work'],
    },
    apprasymas: {
        type: String,
        required: [true, 'you forgot to write the description'],
    },
    darbo_val: {
        type: Number,
        min: [1, 'ranking must be above 1'],
        max: [100, 'ranking cant be above 5'],
    },
    darbuotojo_vardas: {
        type: String,
        required: [true, 'You forgot to write name'],
    }
})

const Work = mongoose.model('Work', jobSchema);

module.exports = Work;