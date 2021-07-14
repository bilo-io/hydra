import React from 'react'

export const Advert = ({ item }: { item: any }) => {
  return (
    <div className="advert-card" style={{ background: item.color }}>
      <div><strong>{item.name}</strong></div>
      <br />
      <div>{item.text}</div>
    </div>
  )
}

export default Advert
