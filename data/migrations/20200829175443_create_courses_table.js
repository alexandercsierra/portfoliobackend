
exports.up = function(knex) {
  return knex.schema.createTable('courses', tbl=>{
      tbl.increments();
      tbl.string('title', 128).notNullable().index();
      tbl.string('img');
      tbl.string('desc');
      tbl.integer('progress').defaultTo(0);
      tbl.string('status', 128).defaultTo('queued for future learning')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('courses')
};
