import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'
import { Bid } from 'redux/state'

interface BidsListProps {
  bids: Bid[]
}

/**
 * A list of all bids
 * @param props {BidsListProps}
 */
export default function BidsList(props: BidsListProps) {
  const { bids } = props

  return (
    <List aria-label="bids list">
      <Divider style={{ marginTop: 22 }} />
      {bids.map((bid) => (
        <ListItem key={bid.id}>
          <ListItemText
            secondary={bid.driver.display_name}
            primary={`$${bid.amount}`}
          />
        </ListItem>
      ))}
      <Divider style={{ marginBottom: 22 }} />
    </List>
  )
}
