import { useState } from 'react';
import classes from './FAQ-item.module.css';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Fade from 'react-reveal/Fade';


const FAQItem = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const showAnswerHandler = () => {
        setShowAnswer((prevState) => !prevState);
    }
    return (
        <div className={classes.faq}>
            <div className={classes.container}>
                <div onClick={showAnswerHandler} className={classes.question_container} >
                    <div className={classes.question}>
                        <div className={classes.icons}>
                            <QuestionMarkIcon />
                        </div>
                        <p>{question}</p>
                    </div>
                    <ArrowCircleDownIcon className={classes.arrow} />
                </div>
                {showAnswer && <Fade bottom duration={500} > <div className={classes.answer}>
                    <div className={classes.icons}>
                        <img src="/tick.svg" alt="Question" />
                    </div>
                    <p>{answer}</p>
                </div>
                </Fade>}
            </div>
        </div>
    )
}
export default FAQItem;