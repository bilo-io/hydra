import React from 'react'
import FAIcon from 'react-fontawesome'

const Download = ({ src, children, hasIcon }: { src: any; children: any, hasIcon?: boolean }) => {
    return (
        <a href={src} download>
            {hasIcon && <FAIcon name='download-alt' />}
            {children}
        </a>
    )
}

export default Download
