import React from 'react'
import { connect } from 'react-redux'
import styles from './UserDetails.module.scss'
import TypeHeader from '../../modules/TypeHeader/TypeHeader'
import {User} from "../../types";

interface UserDetailsViewProps {
    userDetails: User,
}

const UserDetails: React.FC<UserDetailsViewProps> = ({
    userDetails = {},
}) => {

  if(!userDetails || userDetails === {}){
    return null
  }

    return (
      <>
        <div className={styles.root}>
          <TypeHeader title="User Details" />
          <div className={styles.topWrapper}>
            <div className={styles.details}>
              <div className={styles.phone}>
                <span className={styles.prefix}>Phone: </span>
                {userDetails.phone}
              </div>
              <div className={styles.email}>
                <span className={styles.prefix}>Email: </span>
                {userDetails.email}
              </div>
              <div className={styles.name}>
                <span className={styles.prefix}>Name: </span>
                {userDetails.name}
              </div>
              <div className={styles.username}>
                <span className={styles.prefix}>Username: </span>
                {userDetails.username}
              </div>
              <div className={styles.website}>
                <span className={styles.prefix}>Website: </span>
                {userDetails.website}
              </div>
              {userDetails.address && (
                <div className={styles.address}>
                  <span className={styles.prefix}>Address: </span>
                  {userDetails.address.city}
                  <div>
                    {userDetails.address.street}
                  </div>
                </div>
              )}
              {userDetails.company && (
                <div className={styles.company}>
                  <span className={styles.prefix}>Company: </span>
                  {userDetails.company.name}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
}

const mapStateToProps = ({
   // @ts-ignore
   app,
}) => ({
    userDetails: app.userDetails
})

export default connect(mapStateToProps, null)(UserDetails);