import React from 'react'
import { compose } from 'redux'
import Redux from '~/providers/ReduxProvider'

const providers = [Redux]

export default compose<React.ComponentType>(...providers)