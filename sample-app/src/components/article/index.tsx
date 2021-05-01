import React from 'react'

import { Paragraph } from './paragraph'

import styles from './index.module.css'

type Props = {
    content: string
}

export const Article: React.FC<Props> = ({ content }) => {
    return (
        <>
            {content.split('\n\n').map((p, i) => (
                <Paragraph p={p} key={i} />
            ))}
        </>
    )
}