import { Typography } from '@material-ui/core'
import { pick } from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import ReduxState from '~/redux/state'

type MyBidConnectProps = Pick<ReduxState, 'myBid'>

type MyBidProps = MyBidConnectProps

const connector = (state: ReduxState): MyBidConnectProps =>
  pick(state, ['myBid'])

const withStore = connect(connector)

/**
 * Show my bid if any
 * @param props {MyBidProps}
 */
function MyBid(props: MyBidProps) {
  const { myBid } = props

  if (!myBid) {
    return <div />
  }

  return (
    <Typography
      variant="h4"
      style={{ paddingTop: 10, paddingBottom: 30, textAlign: 'center' }}
    >
      My bid: ${myBid}
    </Typography>
  )
}

export default withStore(MyBid)
