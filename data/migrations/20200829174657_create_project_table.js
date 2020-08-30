
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl=>{
      tbl.increments();
      tbl.string('title', 128).notNullable().index();
      tbl.string('image');
      tbl.string('alt', 128);
      tbl.string('desc');
      tbl.string('repo');
      tbl.string('url');
      tbl.boolean('solo').notNullable();
      tbl.boolean('featured').defaultTo(false);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};
