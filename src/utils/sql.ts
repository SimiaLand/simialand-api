import { createConnection } from 'mysql'
import { MYSQL_CONFIG } from '../consts'

const sql = <T = null>(...params: any[]) => {
  return ([query]: TemplateStringsArray): Promise<T> => {
    return new Promise(function (resolve, reject) {
      const connection = createConnection(MYSQL_CONFIG)

      connection.query(query, params, function (error, results) {
        error ? reject(error) : resolve(results)
      })

      connection.end()
    })
  }
}

export default sql
