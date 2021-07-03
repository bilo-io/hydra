import React, { Component } from 'react'
import FAIcon from 'react-fontawesome'
import PropTypes from 'prop-types'

export class Accordion extends Component {
    static propTypes = {
        isOpen: PropTypes.bool,
        isOpenDefault: PropTypes.bool,
        children: PropTypes.any
    }

    static defaultProps = {
        title: 'Accordion.title',
        isOpen: true,
        openIcon: 'chevron-up',
        closedIcon: 'chevron-down'
    }

    state = {
        isOpen: true
    }

    componentDidMount () {
        this.setState({
            isOpen: this.props.isOpenDefault
        })
    }

    toggle = () => this.setState({ isOpen: !this.state.isOpen })

    render () {
        const { children, title, onClose, className, openIcon, closedIcon } = this.props
        const { isOpen } = this.state
        const buttonStyle = { marginTop: '1rem', marginRight: '1rem' }
        return <div className={`accordion ${isOpen ? 'accordion-open' : ''}`}>
            <div
                className='flex-row space-between title'
                onClick={this.toggle}
                style={{ width: '100%', height: '3rem', lineHeight: '3rem' }}>
                <span style={{ cursor: 'pointer', marginLeft: '1rem' }}>
                    <span>{ title }</span>
                </span>
                <span>
                    <span>{
                        isOpen
                            ? <FAIcon name={ openIcon } style={buttonStyle} />
                            : <FAIcon name={ closedIcon } style={buttonStyle} />
                    }
                    </span>
                    {
                        onClose && <FAIcon name='times' style={{ marginTop: '1rem', marginRight: '1rem' }} onClick={ onClose } />
                    }
                </span>
            </div>
            { isOpen && <div className={`content ${className}`}>{ children }</div> }
        </div>
    }
}

export default Accordion
