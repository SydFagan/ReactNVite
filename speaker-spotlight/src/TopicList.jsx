function TopicList({ topics }) {
  return (
    <div className="topic-list">
      <h4>Learning Outcomes</h4>
      <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </div>
  )
}

export default TopicList