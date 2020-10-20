import React from 'react'
import { render } from 'react-dom'

import NewApp from '~/components/App'
import providers from '~/providers'

const Providers = providers(NewApp)

render(<Providers />, document.getElementById('root'))
