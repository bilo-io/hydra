import React from 'react'

export const TabsComponent = ({ items, activeIndex, onClickItem }) => {
    return <div className='tabs'>
        {
            items.map((item, i) => <div key={ i }
                className={`tab ${i === activeIndex ? 'active':''}`}
                onClick={ () => onClickItem(items[i], i) }
            >{ item }</div>)
        }
    </div>
}
