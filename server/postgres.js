import pg from 'pg'

export default async function queryToPostgres(query) {
  connection = new pg.Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'postgres',
    password: '1234',
    port: 5432,
  })
  return new Promise((onSuccess, onError) => {
    connection.query(query, function (error, results, fields) {
      if (error) {
        onError(error)
      } else {
        onSuccess(results)
      }
    })
  })
}
