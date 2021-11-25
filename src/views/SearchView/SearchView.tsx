import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './SearchView.module.scss'

import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { setSearchedUsers } from '../../store/reducers/appSlice/appSlice'

import UserList from '../../modules/UserList/UserList'
import TopBar from '../../modules/TopBar/TopBar'
import TypeHeader from "../../modules/TypeHeader/TypeHeader";

import {fetchUsers} from "../../utils/fetchUsers";
import {User} from "../../types";
import UserDetails from "../../components/UserDetails/UserDetails";
import { setIsLoading } from '../../store/reducers/commonSlice/commonSlice'

interface SearchViewProps {
  users: User[],
  userDetails: User,
  setSearchedUsersAction: Dispatch<ActionCreatorWithPayload<User[]>>
  setIsLoadingAction: Dispatch<ActionCreatorWithPayload<boolean>>,
  isWrongSearchTerm: boolean
}

const SearchView: React.FC<SearchViewProps> = ({
  users,
  userDetails,
  setSearchedUsersAction,
  setIsLoadingAction,
  isWrongSearchTerm,
}) => {
  useEffect(() => {
    if (!users || users.length === 0) {
      (async () => {
        // @ts-ignore
        setIsLoadingAction(true)
        // @ts-ignore
        await fetchUsers()
          .then(({ data }) => {
            console.log(data);

            setSearchedUsersAction(data)
          })
          .finally(() => {
            // @ts-ignore
            setIsLoadingAction(false)
          })})();
    }
  }, [ // eslint-disable-line react-hooks/exhaustive-deps
    setSearchedUsersAction,
  ]);

  // @ts-ignore
  return (
    <>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <div className={styles.topContainer}>
            <TypeHeader title="Users List"/>
            <TopBar />
          </div>
          <div className={styles.bottomContainer}>
            {users
            && (Object.keys(userDetails).length === 0 || !userDetails)
            && !isWrongSearchTerm
            && (
              <UserList users={users} />
            )}

            {Object.keys(userDetails).length > 0 && (
              <UserDetails userDetails={userDetails}/>
            )}

            {isWrongSearchTerm && (
              <div className={styles.empty}>
                No users found under this name. Try again! :)
              </div>
            )}
          </div>
        </div>
        <div className={styles.footer}>
          {new Date().getFullYear()} Copyright &copy; User Search by Patryk Bogusz
        </div>
      </div>
    </>
  )
}

const mapStateToProps = ({
  // @ts-ignore
  app,
}) => ({
  users: app.users,
  userDetails: app.userDetails,
  isWrongSearchTerm: app.isWrongSearchTerm,
})

const mapsDispatchToProps = {
  setIsLoadingAction: setIsLoading,
  setSearchedUsersAction: setSearchedUsers,
}

export default connect(mapStateToProps, mapsDispatchToProps)(SearchView);