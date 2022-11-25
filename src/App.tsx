import FlexMessage from './components/FlexMessage'
import { allFlexMessages } from './flex'

function App() {
  return (
    <div className="App">
      {allFlexMessages.map(({ name, flexMessage }, index) => (
        <div key={`Flex-${name}`}>
          <FlexMessage
            payload={{
              type: 'flex',
              altText: 'Flex Message',
              contents: flexMessage,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default App
