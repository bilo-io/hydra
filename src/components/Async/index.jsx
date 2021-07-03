// #region Modules
import React, { Component } from 'react'
// #endregion Modules

// #region Components
import ErrorBoundary from '../ErrorBoundary'
// #endregion

// #region Assets & Data
// #endregion

export class Async extends Component {
    static defaultProps = {
        onMount: () => console.log('<Async/>.unMount = () => {}'),
        margin: '0rem'
    }

    componentDidMount () {
        this.props.onMount()
    }

    render () {
        const {
            isLoading,
            children,
            loader,
            margin
        } = this.props

        return (
            <>
                <ErrorBoundary>
                    {
                        isLoading
                            ? loader || <div style={{ margin: 'auto', marginTop: margin, marginBottom: margin }}>
                                <div className='loader' />
                            </div>
                            : children
                    }
                </ErrorBoundary>
            </>
        )
    }
}

export default Async
