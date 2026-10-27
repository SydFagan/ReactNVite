import TopicList from './TopicList'
import './SpeakerCard.css'

function SpeakerCard({ name, title, company, photo, talkTitle, summary, topics }) {
  return (
    <article className="speaker-card">
      <img
        className="speaker-photo"
        src={photo}
        alt={`Headshot of ${name}, ${title} at ${company}`}
      />
      <h2 className="speaker-name">{name}</h2>
      <p className="speaker-role">
        {title} · {company}
      </p>
      <h3 className="talk-title">{talkTitle}</h3>
      <p className="talk-summary">{summary}</p>
      <TopicList topics={topics} />
    </article>
  )
}

export default SpeakerCard