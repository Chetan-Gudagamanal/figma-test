import styles from "./formComponent.module.css"

export default function FormComponent(){
    const onSubmit=(data)=> {
        console.log(data)
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
                aria-describedby="emailHelp" />
            </div>

            <div className="form-group">
            <label className={styles.Label} htmlFor="instance">Instance</label>
            <input
                type="text"
                name="instance"
                className={styles.FormInput}
                id="instance" />
            </div>

            <div className="form-group">
            <label className={styles.Label} htmlFor="instance">No. Of Drones</label>
            <input
                type="text"
                name="instance"
                className={styles.FormInput}
                id="instance" />
            </div>

            <div className="form-group">
            <label className={styles.Label} htmlFor="instance">Geo Location(Lat, Lon)</label>
            <input
                type="text"
                name="instance"
                className={styles.FormInput}
                id="instance" />
            </div>

            <div className="form-group">
            <label className={styles.Label} htmlFor="instance">Animation File Path</label>
            <input
                type="text"
                name="instance"
                className={styles.FormInput}
                id="instance" />
            </div>

            <div className="form-group">
            <label className={styles.Label} htmlFor="instance">Advanced Options</label>
            <input
                type="text"
                name="instance"
                className={styles.FormInput}
                id="instance" />
            </div>

            
            <button className={styles.FormBtn}>Submit</button>
            <button className={styles.FormBtn}>Plot Animation</button>
            <button className={styles.FormBtn}>Close</button>

        </div>
        </form>
        {/* </div> */}
        </>
    )
}