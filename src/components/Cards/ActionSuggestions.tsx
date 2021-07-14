import React from 'react'

export const ActionSuggestions = ({ userState }: { userState: any }) => <div>
  {
    !userState.isVerified && (
      <div className="text-center">
        <h4>Verify Account</h4>
      </div>
    )
  }

  {
    !userState.hasFunds && (
      <div className="text-center">
        <h4>Add Funds</h4>
      </div>
    )
  }

  {
    !userState.hasHoldings && (
      <div className="text-center">
        <h4>Invest</h4>
      </div>
    )
  }
</div>

export default ActionSuggestions
