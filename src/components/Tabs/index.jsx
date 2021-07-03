import React, { Component } from 'react'
import { TabsComponent } from './TabsComponent'
import PropTypes from 'prop-types'

export class Tabs extends Component {
    static defaultProps = {
        keys: []
    }

    state = {
        activeTab: undefined
    }

    componentDidMount () {
        this.setState({
            activeTab: this.props.defaultTab,
            activeTabIndex: 0
            // activeTabIndex: this.props.defaultTab.findIndex(),
        })
    }

    render () {
        const { activeTab, activeTabIndex } = this.state
        const { json, ui, code, keys, className } = this.props
        return <div>
            <TabsComponent
                items={keys}
                activeIndex={ activeTabIndex }
                onClickItem={(item, i) => this.setState({ activeTab: item, activeTabIndex: i })}
            />
            <div className={ className }>
                { activeTab && this.props[activeTab] }
            </div>
        </div>
    }
}
