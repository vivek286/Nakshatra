import FAQItem from './FAQ-item';
import classes from './FAQ.module.css';

const FAQ = () => {
    return (
        <section className={classes.faq} id='FAQs'>
            <h2>Frequetly Asked Questions</h2>
            <div className={classes.faq_container}>
                <FAQItem question="Coming Soon..." answer="Coming Soon..." />
                <FAQItem question="Coming Soon..." answer="Coming Soon..." />
                <FAQItem question="Coming Soon..." answer="Coming Soon..." />
                <FAQItem question="Coming Soon..." answer="Coming Soon..." />
                <FAQItem question="Coming Soon..." answer="Coming Soon..." />
                <FAQItem question="Coming Soon..." answer="Coming Soon..." />
                <FAQItem question="Coming Soon..." answer="Coming Soon..." />
                <FAQItem question="Coming Soon..." answer="Coming Soon..." />
                <FAQItem question="Coming Soon..." answer="Coming Soon..." />
                <div className={classes.discord}>
                    <p>Have more questions? Join our  <a href="https://discord.gg/ZNeAcpv66y" target="_blank" rel="noopener noreferrer">discord server</a> </p>
                </div>
            </div>
        </section>
    )
}
export default FAQ;