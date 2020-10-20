import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { pick } from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import ReduxState from '~/redux/state'
import BidMaker from './BidMaker'
import BidsList from './BidsList'
import MyBid from './MyBid'

type BidsConnectProps = Pick<ReduxState, 'bids'> &
  Pick<ReduxState, 'myBid'> &
  Pick<ReduxState, 'loading'>

type BidsProps = BidsConnectProps

const connector = (state: ReduxState): BidsConnectProps =>
  pick(state, ['bids', 'myBid', 'loading'])

const withStore = connect(connector)

/**
 * The view with the bids and the bid maker
 * @param props {BidsProps}
 */
function Bids(props: BidsProps) {
  const { bids, myBid, loading } = props

  return (
    <Paper elevation={15} style={{ margin: 100, padding: 60 }}>
      <Typography variant="h4">Existing bids:</Typography>

      {loading && <div>Loading</div>}

      {!loading && <BidsList bids={bids} />}

      {!loading && <MyBid />}

      {!loading && <BidMaker />}
    </Paper>
  )
}

export default withStore(Bids)
