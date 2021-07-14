import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

// #region SENTRY
// import * as Sentry from '@sentry/react'
// import { Integrations } from '@sentry/tracing'

// Sentry.init({
//   dsn: 'https://fb8cf9d51cb84fbd8bce5ddff47885d4@o159380.ingest.sentry.io/5865868',
//   integrations: [new Integrations.BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0
// })
// #endregion

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
