export interface UserType {
  id: number
  username: string
  email: string
  createdAt: string
  firstName?: string
  lastName?: string
}

export interface UserInputType {
  username: string
  email: string
  password: string
}
