export interface ApolloServerConfigType {
  port: number
}

export interface SQLResultInfoType {
  affectedRows: number
}

export interface SQLInsertResultInfoType extends SQLResultInfoType {
  insertId: number
}
