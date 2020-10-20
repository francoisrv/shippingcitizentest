import { takeLatest, put, call } from 'redux-saga/effects'
import { ReduxActionType } from '../types'
import { fetchedBidsAction, fetchingBidsAction } from '../actions'

function* fetchBidsSaga() {
  yield put(fetchingBidsAction())
  
  const response = yield call(fetch, 'https://api.jsonbin.io/b/5f563626993a2e110d403821')
  const { data: { bids: { data: bids } } } = yield call(response.json.bind(response))
  
  yield put(fetchedBidsAction(bids))
}

export default function* sagas() {
  yield takeLatest(ReduxActionType.FETCH_BIDS, fetchBidsSaga)
}
