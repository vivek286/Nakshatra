// import makeUrl, { TCalendarEvent } from 'add-event-to-calendar';
import classes from './Add_to_cal.module.css';
import Head from 'next/head';

function calend(props){
    return(
        <div>
            <Head>
                
                 <script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script></Head>
           
            <div className={classes.dropdown}>
            <a target="_blank" href={`https://calendar.google.com/calendar/u/0/r/eventedit?text=${props.title}&dates=20220117T090000/20220117T100000&ctz=Asia/Kolkata&details=${props.descrip}` }>
            <button className={classes.dropbtn}>
  
      Add to calender</button>
                </a>    
  
  {/* 
        <button className={classes.dropbtn}>
            
      Add to calender</button>
  
  <div className={classes.dropdown_content}>
            <a href={`https://www.addevent.com/event/${(props.id)}+apple`} title="Apple" target="_blank" ><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-apple-t1.png" alt="Apple" width="45" border="0"  />Apple</a>
            <a href={`https://www.addevent.com/event/${(props.id)}+google`} title="Google" target="_blank" ><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-google-t1.png" alt="Google" width="45" border="0"  />Google</a>
            <a href={`https://www.addevent.com/event/${(props.id)}+office365`} title="Office 365" target="_blank" ><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-office365-t1.png" alt="Office 365" width="45" border="0"   />Office</a>
            <a href={`https://www.addevent.com/event/${(props.id)}+outlook`} title="Outlook" target="_blank" ><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlook-t1.png" alt="Outlook" width="45" border="0"  /> Outlook </a>
            <a href={`https://www.addevent.com/event/${(props.id)}+outlookcom`} title="Outlook.com" target="_blank" ><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlookcom-t1.png" alt="Outlook.com" width="45" border="0"  />Outlook</a>
            <a href={`https://www.addevent.com/event/${(props.id)}+yahoo`} title="Yahoo" target="_blank"><img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-yahoo-t1.png" alt="Yahoo" width="45" border="0"  />Yahoo</a>
            
  </div> */}
</div>
       </div>
    )
}
export default calend;