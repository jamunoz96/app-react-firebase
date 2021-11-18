export type AppActionType = {
    type: string
    payload: { data: any | null, error: string | null }
}