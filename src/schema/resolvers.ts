import { hashSync } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { UserInputType, UserType, SQLInsertResultInfoType } from '../types'
import { BCRYPT_ROUNDS, JWT_SECRET, USER_ALL_PUBLIC_FIELDS, USER_INPUT_FIELDS } from '../consts'
import { sql } from '../utils'

const Query = {
  async users() {
    return await sql<UserType[]>(USER_ALL_PUBLIC_FIELDS)`
      SELECT ??
      FROM users
    `
  },

  async user(id: number) {
    const users = await sql<UserType[]>(USER_ALL_PUBLIC_FIELDS, id)`
      SELECT ??
      FROM users
      WHERE id = ?
    `

    return users.length ? users[0] : null
  },
}

const Mutation = {
  async createUser(_: any, { user: { username, email, password } }: { user: UserInputType }) {
    const hashedPassword = hashSync(password, BCRYPT_ROUNDS)

    const { insertId } = await sql<SQLInsertResultInfoType>(USER_INPUT_FIELDS, username, email, hashedPassword)`
      INSERT INTO users (??)
      VALUES (?, ?, ?)
    `

    return sign({ id: insertId }, JWT_SECRET)
  },
}

export default {
  Query,
  Mutation,
}
