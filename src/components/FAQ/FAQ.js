import {useState} from 'react';



import styles from './FAQ.module.scss'
import { AiOutlineDown } from "react-icons/ai";



const FAQ = ({question, answer}) => {

  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div onClick={()=> setShowAnswer((prevValue => !prevValue))} className={styles.faq}>
      <div className={styles.faq_question}>
        <h3>{question}</h3>
        <AiOutlineDown style={showAnswer ? {transform: "rotateZ(-90deg)"}: null} className={styles.icon} />
      </div>
      <div style={showAnswer ? {height: "8rem",overflowY:"scroll"}: null} className={styles.faq_answer}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;