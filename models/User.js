const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    mail:{
        type: DataTypes.STRING
    }
})

module.exports = User;