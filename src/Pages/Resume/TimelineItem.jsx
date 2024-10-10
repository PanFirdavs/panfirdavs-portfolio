

const TimelineItem = ({ title, date, description, company }) => {
    return (
      <li className="timeline-item">
        <h3 className="h4 timeline-item-company">{company}</h3>
        <h4 className="h4 timeline-item-title">{title}</h4>
        <span>{date}</span>
        <p className="timeline-text">{description}</p>
      </li>
    );
  }
  
  export default TimelineItem;