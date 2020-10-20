import { fetchedBidsAction } from 'redux/actions'
import ReduxState from '~/redux/state'
import { ReduxActionType } from '~/redux/types'

type State = ReduxState['bids']

type Actions = ReturnType<typeof fetchedBidsAction>

const initialState: State = []

export default function bidsReducer(state: State = initialState, action: Actions): State {
  if (action.type === ReduxActionType.FETCHED_BIDS) {
    return action.payload.bids
  }
  return state
}
