'use strict'

var dbm
var type
var seed

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate
  type = dbm.dataType
  seed = seedLink
}

exports.up = function (db, callback) {
  return db.createTable('movies', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    title: 'string',
    description: 'text',
    rating: 'real',
    image: 'string',
    created_at: 'datetime',
    updated_at: 'datetime',
  }, callback)
}

exports.down = function (db) {
  return db.dropTable('movies')
}

exports._meta = {
  "version": 1
}
