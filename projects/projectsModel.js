module.exports = {
    getAll,
    add,
    update,
    remove
}

const db = require('../data/db-config')

function getAll(){
    return db('projects').returning('*')
}

function add(project){
    return db('projects').insert(project).returning('*');
}

function update(id, project){
    return db('projects').where({id}).update(project).returning('*')
}

function remove(id){
    return db('projects').where({id}).del();
}