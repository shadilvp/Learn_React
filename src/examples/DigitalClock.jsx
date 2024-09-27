import React,{useState,useEffect} from "react";
import styles from './DigitalClock.module.css'
function DigitalClock(){

    const [clock, setClock] = useState(new Date());

    useEffect(()=>{
       const interValid = setInterval(() => {
            setClock(new Date())
       }, 1000);

       return () => {
        clearInterval(interValid)
       };

    },[])

    const format = () => {
        let Hours = clock.getHours();
        const Minutes = clock.getMinutes();
        const Seconds = clock.getSeconds();
        const meridiam = Hours >= 12 ? "PM" : "AM" ;

        Hours = Hours % 12 || 12 ;

        

        return `${TwoInteger(Hours)}:${TwoInteger(Minutes)}:${TwoInteger(Seconds)} ${meridiam}`
    }

    let TwoInteger = (number) => {
        return (number < 10 ? "0" : "") + number ;
    } 

    return(
        <div className={styles['clock-main']}>
            <div className={styles.container}>
                <span>{format()}</span>
            </div>
        </div>
    )
}

export default DigitalClock