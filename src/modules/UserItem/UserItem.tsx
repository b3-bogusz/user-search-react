import React from 'react'
import styles from './UserItem.module.scss'

interface UserItemProps {
    id: number,
    userName: string,
    name: string,
}

const UserItem: React.FC<UserItemProps> = ({
   id,
   userName,
   name
}) => (
    <div className={styles.root}>
            <div className={styles.number}>
                {`${id}.`}
            </div>
            <div className={styles.name}>
                {name}
            </div>
            <div className={styles.username}>
                {`@${userName}`}
            </div>
    </div>
)

export default UserItem;