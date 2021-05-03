import React,{FC} from 'react'
import styles from '@src/global.module.css'
import C1 from "@src/c1";
interface Props{

}

const App:FC<Props> = (props)=>{
  
  return (<div className={styles.a}><C1/></div>)
}

export default App