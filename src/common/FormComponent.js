import { useState } from "react";
import styles from "./formComponent.module.css"

export default function FormComponent(){
    const [animationID, setAnimationID] = useState('');
    const [instance, setInstance] = useState('');
    // const onSubmit=(data, e)=> {

    //     console.log(data)
    // }
    const onSubmit=(e,)=> {
        e.preventDefault()
        console.log(animationID, instance)
    }
    return(
        <>
        <form onSubmit={onSubmit} className="centered-container-form">
        <div className="form-container">

            <div className="form-group">
            <label className={styles.Label} htmlFor="animationID">Animation ID :</label>
            <input
                type="text"
                className={styles.FormInput}
                id="animationID"
                name="animationID"
                aria-describedby="emailHelp"
                onChange={(e) => setAnimationID(e.target.value)} 
            />
            </div>

            <div className="form-group">
            <label className={styles.Label} htmlFor="instance">Instance</label>
            <input
                type="text"
                name="instance"
                className={styles.FormInput}
                id="instance" 
                onChange={(e) => setInstance(e.target.value)}
            />
            </div>

            <div className="form-group">
            <label className={styles.Label} htmlFor="drones">No. Of Drones</label>
            <input
                type="text"
                name="drones"
                className={styles.FormInput}
                id="drones" />
            </div>

            <div className="form-group">
            <label className={styles.Label} htmlFor="geo">Geo Location(Lat, Lon)</label>
            <input
                type="text"
                name="geo"
                className={styles.FormInput}
                id="geo" />
            </div>

            <div className="form-group">
            <label className={styles.Label} htmlFor="animfilepath">Animation File Path</label>
            <input
                type="text"
                name="animfilepath"
                className={styles.FormInput}
                id="animfilepath" />
            </div>

            <div className="form-group">
            <label className={styles.Label} htmlFor="adv">Advanced Options</label>
            <select className={styles.FormSelect} name="adv" id="adv">
                <option value="op1">op1</option>
                <option value="op2">op2</option>
                <option value="op3">op3</option>
                <option value="op4">op4</option>
            </select>
            {/* <input
                type="text"
                name="instance"
                className={styles.FormInput}
                id="instance" /> */}
            </div>

            {/* <div className="btn-group"> */}
                <button className={styles.FormBtn}>Submit</button>
                <button className={styles.FormBtn}>Plot Animation</button>
                <button className={styles.FormBtn}>Close</button>
            {/* </div> */}

        </div>
        </form>
        {/* </div> */}
        </>
    )
}