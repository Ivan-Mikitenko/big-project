import {useState} from "react";
import styles from './Counter.module.scss';


export const Counter = () => {
    const [count, setCount] = useState(1000)



    return <div>
        <h1 className={styles.text}>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
            PLUS
        </button>
        <button className={styles.btn} disabled={count === 0} onClick={() => {
            console.log('ss')
            setCount(count - 1)
        }}>
            MINUS
        </button>
    </div>
}
