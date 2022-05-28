import { config } from 'dotenv'
import { ConnectionConfig } from 'mysql'

config()

export const ROOT_DIR = __dirname

export const PORT = Number(process.env.PORT)

export const MYSQL_CONFIG: ConnectionConfig = {
  host: String(process.env.MYSQL_HOST),
  user: String(process.env.MYSQL_USER),
  password: String(process.env.MYSQL_PASSWORD),
  database: String(process.env.MYSQL_DATABASE),
}

export const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS)

export const JWT_SECRET = String(process.env.JWT_SECRET)

export const USER_ALL_PUBLIC_FIELDS = ['id', 'username', 'email', 'created_at', 'first_name', 'last_name', 'avatar']

export const USER_INPUT_FIELDS = ['username', 'email', 'password']
