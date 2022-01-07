import FAQItem from './FAQ-item';
import classes from './FAQ.module.css';

const FAQ = () => {
    return (
        <section className={classes.faq} id='FAQs'>
            <h2>Frequetly Asked Questions</h2>
            <div className={classes.faq_container}>
                <FAQItem question="Is this event online or offline?" answer="Abh kya bataye, iccha offline ki thi
But koi ni seh lenge thoda"/>
                <FAQItem question="Is this event online or offline?" answer="Abh kya bataye, iccha offline ki thi
But koi ni seh lenge thoda"/>
                <FAQItem question="Is this event online or offline?" answer="Abh kya bataye, iccha offline ki thi
But koi ni seh lenge thoda"/>
                <FAQItem question="Is this event online or offline?" answer="Abh kya bataye, iccha offline ki thi
But koi ni seh lenge thoda"/>
                <FAQItem question="Is this event online or offline?" answer="Abh kya bataye, iccha offline ki thi
But koi ni seh lenge thoda"/>
                <FAQItem question="Is this event online or offline?" answer="Abh kya bataye, iccha offline ki thi
But koi ni seh lenge thoda"/>
                <FAQItem question="Is this event online or offline?" answer="Abh kya bataye, iccha offline ki thi
But koi ni seh lenge thoda"/>
                <FAQItem question="Is this event online or offline?" answer="Abh kya bataye, iccha offline ki thi
But koi ni seh lenge thoda"/>
                <FAQItem question="Is this event online or offline?" answer="Abh kya bataye, iccha offline ki thi
But koi ni seh lenge thoda"/>
                <div className={classes.discord}>
                    <p>Have more questions? Join our <a href="#">discord server</a> </p>
                </div>
            </div>
        </section>
    )
}
export default FAQ;