module.exports = {
    getAll,
    add,
    update,
    remove
}

const db = require('../data/db-config')

function getAll(){
    return db('courses').returning('*')
}

function add(course){
    return db('courses').insert(course).returning('*');
}

function update(id, course){
    return db('courses').where({id}).update(course).returning('*')
}

function remove(id){
    return db('courses').where({id}).del();
}