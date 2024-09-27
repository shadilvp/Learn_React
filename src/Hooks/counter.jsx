import styles from './counter.module.css'
import React,{useState} from "react"

function Counter (){
    const [count , setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement =() => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(<div>
                <p className={styles.count}>{count}</p>
                <button className={styles['count-reset']} onClick={reset}>reset</button>
                <button className={styles['count-increment']} onClick={increment}>increment</button>
                <button className={styles['count-decrement']} onClick={decrement}>decrement</button>
           </div>
        
    );
}
export default Counter