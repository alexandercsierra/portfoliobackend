
exports.up = function(knex) {
    return knex.schema.table('projects', tbl=>{
        tbl.text('desc').alter()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.table('projects', tbl=>{
        tbl.string('desc').alter()
    })
  };