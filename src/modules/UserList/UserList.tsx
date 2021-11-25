import React from 'react'
import styles from './UserList.module.scss'
import UserItem from "../UserItem/UserItem"
import { User} from "../../types"

interface UserListProps {
    users: User[]
}

const UserList: React.FC<UserListProps> = ({
    users,
}) => (
  <div className={styles.root}>
    {users.map((user, index) => {
      return (
        <UserItem
          key={index}
          id={user.id}
          name={user.name}
          userName={user.username}
        />
      )
    })}
  </div>
)

export default UserList;