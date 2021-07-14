import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FAIcon from 'react-fontawesome'
// import { toPng } from 'dom-to-image'
// import { Accordion } from '../'

export class ErrorBoundary extends Component {
    state = {
      hasError: false,
      isExpanded: false
    }

    static propTypes = {
      children: PropTypes.any
    }

    static getDerivedStateFromError (error) {
      // if (/Loading chunk [\d]+ failed/.test(error.message)) {
      //     console.log('RELOADING WINDOW')
      //     window.location.reload()
      // }
      return { hasError: true, message: error.message, stack: error.stack.split('\n') }
    }

    contactSupport = () => {
      this.captureScreen()
    }

    captureScreen = () => {
      // TODO: screen capture util of entire app container <div id="root" />
    }

    render () {
      const {
        message,
        stack,
        isExpanded,
        hasError
      } = this.state

      const {
        children
      } = this.props

      return hasError
        ? <div className='error-boundary' style={{ color: 'white' }}>
          <div className='heading flex-row'>
            <FAIcon name='exclamation-circle' style={{ marginRight: '1rem', marginTop: '2px' }} />
            <div>ErrorBoundary</div>
          </div>
          <br />
          <div className='message flex-row space-between'>
            <div className='message'>
              { JSON.stringify(message) }
            </div>
            <div onClick={ () => this.setState({ isExpanded: !isExpanded }) }>
              <FAIcon name={ isExpanded ? 'chevron-up' : 'chevron-down' } style={{ marginTop: '1rem', marginRight: '1rem' }}/>
            </div>
          </div>
          <div className='stack'>
            { isExpanded
              ? <div className='stack'>{JSON.stringify(stack)}</div>
              : '...' }
          </div>
          <br />
          <div>
            <button onClick={ this.contactSupport }>
                        Contact Support
            </button>
          </div>
        </div>
        : children
    }
}

export default ErrorBoundary
