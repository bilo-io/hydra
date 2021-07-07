import React, { useState, useEffect } from 'react'
import FAIcon from 'react-fontawesome'
import PropTypes from 'prop-types'

const Accordion = ({
    children,
    title,
    onClose,
    className,
    openIcon,
    closedIcon,
    isOpenDefault
} : {
    children?: any,
    title?: any,
    onClose?: Function,
    className?: string,
    openIcon?: any,
    closedIcon?: any,
    isOpenDefault?: boolean,
}) => {
    const [state, setState] = useState<any>({
        isOpen: true
    })

    const toggle = () =>
        setState((prevState: any) => ({
            ...prevState,
            isOpen: !state.isOpen
        }))

    useEffect(() => {
        setState((prevState: any) => ({
            ...prevState,
            isOpen: isOpenDefault
        }))
    }, [])

    const buttonStyle = { marginTop: '1rem', marginRight: '1rem' }
    return (
        <div className={`accordion ${state?.isOpen ? 'accordion-open' : ''}`}>
            <div
                className="flex-row space-between title"
                onClick={toggle}
                style={{ width: '100%', height: '3rem', lineHeight: '3rem' }}
            >
                <span style={{ cursor: 'pointer', marginLeft: '1rem' }}>
                    <span>{title}</span>
                </span>
                <span>
                    <span>
                        {state?.isOpen
                            ? (
                                <FAIcon name={openIcon} style={buttonStyle} />
                            )
                            : (
                                <FAIcon name={closedIcon} style={buttonStyle} />
                            )}
                    </span>
                    {onClose && (
                        // @ts-ignore
                        <div onClick={onClose}>
                            <FAIcon
                                name="times"
                                style={{ marginTop: '1rem', marginRight: '1rem' }}
                            />
                        </div>
                    )}
                </span>
            </div>
            {state?.isOpen && <div className={`content ${className}`}>{children}</div>}
        </div>
    )
}

Accordion.propTypes = {
    isOpen: PropTypes.bool,
    isOpenDefault: PropTypes.bool,
    children: PropTypes.any
}
export default Accordion
