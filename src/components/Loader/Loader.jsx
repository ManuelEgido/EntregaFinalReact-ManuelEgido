import React from 'react';
import { NewtonsCradle } from '@uiball/loaders';
import styles from './styles.css';

const Loader = () => {
    return (
        <div className='loaderContainer'>
            <center>
                <NewtonsCradle 
                    size={40}
                    speed={1.4} 
                    color="green" 
                />
            </center>
        </div>
    )
}

export default Loader