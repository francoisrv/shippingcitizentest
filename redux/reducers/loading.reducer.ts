import { fetchedBidsAction, fetchingBidsAction } from '~/redux/actions'
import ReduxState from '~/redux/state'
import { ReduxActionType } from '~/redux/types'

type State = ReduxState['loading']

type Actions =
| ReturnType<typeof fetchedBidsAction>
| ReturnType<typeof fetchingBidsAction>

const initialState: State = false

export default function loadingReducer(state: State = initialState, action: Actions): State {
  if (action.type === ReduxActionType.FETCHING_BIDS) {
    return true
  }
  if (action.type === ReduxActionType.FETCHED_BIDS) {
    return false
  }
  return state
}
