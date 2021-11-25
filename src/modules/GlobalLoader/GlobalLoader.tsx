import React from 'react'
import {connect, MapStateToProps} from 'react-redux'
import Loader from '../../components/Loader/Loader'
import styles from './GlobalLoader.module.scss'

interface GlobalLoaderStateProps {
    isLoading: MapStateToProps<boolean, boolean>,
}

// @ts-ignore
const GlobalLoader: React.FC<GlobalLoaderStateProps> = ({
   isLoading,
}) => {
    if (!isLoading) {
        return false
    }

    return (
        <div className={styles.root}>
            <Loader size={5} />
        </div>
    )
}

const mapStateToProps = ({
 // @ts-ignore
 common,
}) => ({
    isLoading: common.isLoading,
})

export default connect(mapStateToProps)(GlobalLoader);