/* eslint-disable react/prop-types */
// #region Modules
import React, { useEffect } from 'react'
// #endregion Modules

// #region Components
import ErrorBoundary from '../ErrorBoundary'
// #endregion

// #region Assets & Data
// #endregion

const Async = ({ onMount, margin, isLoading, children, loader }: any) => {
  useEffect(() => {
    onMount()
  }, [])

  return (
    <>
      <ErrorBoundary>
        {isLoading
          ? loader || (
            <div
              style={{
                margin: 'auto',
                marginTop: margin,
                marginBottom: margin
              }}
            >
              <div className="loader" />
            </div>
          )
          : children}
      </ErrorBoundary>
    </>
  )
}

Async.defaultProps = {
  onMount: () => console.log('<Async/>.unMount = () => {}'),
  margin: '0rem'
}

export default Async
