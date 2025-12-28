const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    level: {
        type: Number, // 0 to 100
        required: true,
    },
    icon: {
        type: String, // URL or class name for icon
        required: false,
    }
});

module.exports = mongoose.model('Skill', skillSchema);
