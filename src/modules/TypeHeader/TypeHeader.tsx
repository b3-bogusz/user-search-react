import React from 'react'

import styles from './TypeHeader.module.scss'

interface TypeHeaderProps {
    title: string,
}

const TypeHeader: React.FC<TypeHeaderProps> = ({
   title,
}) => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    )
}

export default TypeHeader