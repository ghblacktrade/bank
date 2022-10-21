export interface IUser {
    filter(arg0: (user: any) => boolean): unknown
    id: number
    card: number
    amount: number
    name: string
}