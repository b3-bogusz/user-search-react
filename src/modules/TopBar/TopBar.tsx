import React, {Dispatch} from 'react'
import { connect } from 'react-redux'
import SearchInput from '../SearchInput/SearchInput'
import styles from './TopBar.module.scss'
import Svg from '../../components/Svg/Svg'
import { iconChevron } from '../../assets/svg/svg'
import {setIsWrongSearchTerm, setUserDetails} from '../../store/reducers/appSlice/appSlice'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { User } from '../../types'

interface TopBarProps {
  userDetails: User,
  setUserDetailsAction?: Dispatch<ActionCreatorWithPayload<object>>,
  isWrongSearchTerm: boolean,
  setIsWrongSearchTermAction: Dispatch<ActionCreatorWithPayload<boolean>>,
}

const TopBar: React.FC<TopBarProps> = ({
  userDetails,
  setUserDetailsAction,
  isWrongSearchTerm,
  setIsWrongSearchTermAction,
}) => {
  const clearSearch = (): void => {
    // @ts-ignore
    setUserDetailsAction({})
    // @ts-ignore
    setIsWrongSearchTermAction(false)
  }

  const userDetailEmpty = Object.keys(userDetails).length === 0

  return (
    <div className={styles.root}>
      <div className={styles.search}>
        {!userDetailEmpty || isWrongSearchTerm ? (
          <div
            className={styles.goBack}
            onClick={clearSearch}
          >
            <Svg icon={iconChevron} size={1.1} /> Go Back
          </div>
        ) : (
          <SearchInput />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = ({
  // @ts-ignore
  app,
}) => ({
  userDetails: app.userDetails,
  isWrongSearchTerm: app.isWrongSearchTerm,
})

const mapsDispatchToProps = {
  setUserDetailsAction: setUserDetails,
  setIsWrongSearchTermAction: setIsWrongSearchTerm,
}

export default connect(mapStateToProps, mapsDispatchToProps)(TopBar)