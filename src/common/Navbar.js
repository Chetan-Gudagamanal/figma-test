// import * as styles from './navabar.module.css';
import styles from "./navbarStyles.module.css"
import take_off_logo from '../utils/icons/🦆 icon _ take off_.png';
import fense_logo from '../utils/icons/🦆 icon _Fence_.png';
import upload_logo from '../utils/icons/🦆 icon _upload_.png';

export default function Navbar() {
    return (
        <div className={styles.Navbar}>
            <img src={take_off_logo} className="App-logo" alt="logo" />
            <img src={fense_logo} className="App-logo" alt="logo" />
            <img src={upload_logo} className="App-logo" alt="logo" />
        </div>
    );
}