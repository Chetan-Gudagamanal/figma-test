import styles from "./formComponent.module.css"

export default function FormComponent(){
    // const onSubmit=(data, e)=> {

    //     console.log(data)
    // }
    const onSubmit=(e,)=> {
        e.preventDefault()
        console.log(e)
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
            <select className={styles.FormSelect} name="instance" id="instance">
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