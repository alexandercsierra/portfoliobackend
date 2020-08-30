
exports.up = function(knex) {
  return knex.schema.table('projects', tbl=>{
      tbl.integer('priority')
  })
};

exports.down = function(knex) {
  return knex.schema.table('projects', tbl=>{
      tbl.dropColumn('priority')
  })
};
