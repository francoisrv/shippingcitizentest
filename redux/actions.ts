import { Bid } from './state'
import { ReduxActionType } from './types'

export function fetchBidsAction() {
  return {
    type: ReduxActionType.FETCH_BIDS as ReduxActionType.FETCH_BIDS,
  }
}

export function fetchingBidsAction() {
  return {
    type: ReduxActionType.FETCHING_BIDS as ReduxActionType.FETCHING_BIDS,
  }
}

export function fetchedBidsAction(bids: Bid[]) {
  return {
    type: ReduxActionType.FETCHED_BIDS as ReduxActionType.FETCHED_BIDS,
    payload: {
      bids,
    },
  }
}

export function placeBidAction(bid: number) {
  return {
    type: ReduxActionType.PLACE_BID as ReduxActionType.PLACE_BID,
    payload: {
      bid,
    },
  }
}

export function retractBidAction() {
  return {
    type: ReduxActionType.RETRACT_BID as ReduxActionType.RETRACT_BID,
  }
}

export function updateBidAction(bid: number) {
  return {
    type: ReduxActionType.UPDATE_BID as ReduxActionType.UPDATE_BID,
    payload: {
      bid,
    },
  }
}
