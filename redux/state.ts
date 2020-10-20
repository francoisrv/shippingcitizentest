export interface Bid {
  id: number
  amount: number
  driver: {
    display_name: string
  }
}

export default interface ReduxState {
  bids: Bid[]
  loading: boolean
  myBid: number | null
}
