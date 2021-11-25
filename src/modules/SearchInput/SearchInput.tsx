import React, {Dispatch, useState} from 'react'
import { connect } from 'react-redux'
import styles from './SearchInput.module.scss'
import { setIsLoading } from '../../store/reducers/commonSlice/commonSlice'
import {
  setIsWrongSearchTerm,
  setUserDetails,
} from '../../store/reducers/appSlice/appSlice'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import Svg from '../../components/Svg/Svg'
import { iconSearch } from '../../assets/svg/svg'
import { fetchUserByName } from "../../utils/fetchUsers";

interface SearchInputDispatchProps {
  setIsLoadingAction: Dispatch<ActionCreatorWithPayload<boolean>>,
  setUserDetailsAction: Dispatch<ActionCreatorWithPayload<object>>,
  setIsWrongSearchTermAction: Dispatch<ActionCreatorWithPayload<boolean>>,
}

const SearchInput: React.FC<SearchInputDispatchProps> = ({
   setIsLoadingAction,
   setUserDetailsAction,
   setIsWrongSearchTermAction,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const onSubmit =  async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm) {
      return;
    }
    // @ts-ignore
    setIsLoadingAction(true)
    // @ts-ignore
    setIsWrongSearchTermAction(false)

    // @ts-ignore
    await fetchUserByName(searchTerm)
      .then((response) => {
        //@ts-ignore
        const { data: [user] } = response;
        if (!user) {
          throw new Error('no user')
        }
        // @ts-ignore
        setUserDetailsAction(user)
      })
      .catch((err: any) => {
        // @ts-ignore
        setIsWrongSearchTermAction(true)
        console.log(err, 'err')
      })
      .finally(() => {
        // @ts-ignore
        setIsLoadingAction(false)
        setSearchTerm('')
      })
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <form
      className={styles.root}
      onSubmit={onSubmit}
    >
      <Svg
        icon={iconSearch}
        size={1.3}
        svgClassName={styles.svg}
      />
      <input
        name="search"
        className={styles.input}
        type="text"
        value={searchTerm}
        onChange={onChange}
        placeholder="Search by user name..."
        autoComplete="off"
      />
    </form>
  )
}

const mapsDispatchToProps = {
  setIsLoadingAction: setIsLoading,
  setUserDetailsAction: setUserDetails,
  setIsWrongSearchTermAction: setIsWrongSearchTerm,
}

export default connect(null, mapsDispatchToProps)(SearchInput);
