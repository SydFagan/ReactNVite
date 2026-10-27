import SpeakerCard from './SpeakerCard'

const speakers = [
  {
    name: 'Martin Andrijasevic',
    title: 'Junior Front-End Developer',
    company: 'Crawfordsville Code Co.',
    photo: 'images/martin.jpg',
    talkTitle: 'From Plain JS to React: My First Month',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus. Donec ullamcorper nulla non metus auctor fringilla.',
    topics: [
      'Thinking in components instead of DOM nodes',
      'Passing data with props',
      'Setting up and deploying with Vite and Netlify',
    ],
  },
  {
    name: 'Hamzah Al-Emad',
    title: 'Staff Engineer',
    company: 'Hoosier Health Tech',
    photo: '/images/hamzah.jpg',
    talkTitle: 'Accessibility Is Not an Afterthought',
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus. Donec ullamcorper nulla non metus auctor fringilla.',
    topics: [
      'Writing meaningful alt text',
      'Keyboard navigation basics',
      'Testing with a screen reader',
    ],
  },
  {
    name: 'Aldo Stheban',
    title: 'Engineering Manager',
    company: 'Naptown Software',
    photo: '/images/aldo.jpg',
    talkTitle: 'Scaling Small Teams Without Burning Out',
    summary:
      'Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum.',
    topics: [
      'Lightweight code review practices',
      'Setting sustainable sprint goals',
      'Growing junior developers',
    ],
  },
]

function App() {
  return (
    <div className="page">
      <header className="event-header">
        <h1>Circle City Dev Night</h1>
        <p>Thursday, November 6th, 2026 · 6:30 PM</p>
        <p>Command Coffee, 123 Monument Circle, Indianapolis, IN</p>
      </header>

      <main className="speaker-list">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} {...speaker} />
        ))}
      </main>

      <footer className="page-footer">
        <a href="https://github.com/SydFagan/speaker-spotlight">
         Github Repository
        </a>
      </footer>
    </div>
  )
}

export default App