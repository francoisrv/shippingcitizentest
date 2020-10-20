import {
  placeBidAction,
  retractBidAction,
  updateBidAction,
} from '~/redux/actions'
import ReduxState from '~/redux/state'
import { ReduxActionType } from '~/redux/types'

type State = ReduxState['myBid']

type Actions =
  | ReturnType<typeof placeBidAction>
  | ReturnType<typeof retractBidAction>
  | ReturnType<typeof updateBidAction>

const initialState: State = null

export default function myBidReducer(
  state: State = initialState,
  action: Actions
): State {
  if (action.type === ReduxActionType.PLACE_BID) {
    return action.payload.bid
  }
  if (action.type === ReduxActionType.UPDATE_BID) {
    return action.payload.bid
  }
  if (action.type === ReduxActionType.RETRACT_BID) {
    return null
  }
  return state
}
