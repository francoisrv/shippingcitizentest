import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { pick } from 'lodash'
import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'
import {
  placeBidAction,
  retractBidAction,
  updateBidAction,
} from '~/redux/actions'
import ReduxState from '~/redux/state'

type BidMakerConnectProps = Pick<ReduxState, 'myBid'>

interface BidMakerActionProps {
  placeBid: typeof placeBidAction
  retractBid: typeof retractBidAction
  updateBid: typeof updateBidAction
}

type BidMakerProps = BidMakerConnectProps & BidMakerActionProps

const connector = (state: ReduxState): BidMakerConnectProps =>
  pick(state, ['myBid'])

const actions: BidMakerActionProps = {
  placeBid: placeBidAction,
  retractBid: retractBidAction,
  updateBid: updateBidAction,
}

const withStore = connect(connector, actions)

/**
 * A component that displays:
 *  - A textfield to enter bid value
 *  - A button to place bid if no bid, or a button to update bid
 *  - A button to retract bid (only if bid present)
 * @param props {BidMakerProps}
 */
function BidMaker(props: BidMakerProps) {
  const { myBid, placeBid, retractBid, updateBid } = props
  const [bid, setBid] = useState((myBid || 0).toString())

  const handlePlaceBid = () => {
    if (bid) {
      updateBid(Number(bid))
    } else {
      placeBid(Number(bid))
    }
  }

  const handleRetractBid = () => {
    retractBid()
    setBid('0')
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <TextField
        type="number"
        variant="outlined"
        placeholder="Bid..."
        size="small"
        value={bid}
        onChange={(e) => setBid(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handlePlaceBid}
      >
        {Boolean(myBid) ? 'Update bid' : 'Place bid'}
      </Button>
      {Boolean(myBid) && (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleRetractBid}
        >
          Retract bid
        </Button>
      )}
    </div>
  )
}

export default withStore(BidMaker)
