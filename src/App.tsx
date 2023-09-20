import FlexMessage from './components/FlexMessage'
import { allFlexMessages } from './flex'

function App() {
  return (
    <div className="bg-[#849ebf]">
      <div className="space-y-4 flex flex-col">
        {allFlexMessages.map(({ name, flexMessage, source }, _index) => (
          <div key={`Flex-${name}`}>
            <div className="text-xl font-bold">{name}</div>
            <div>
              {source.type === 'link' && (
                <a href={source.link} className="hover:underline">
                  {source.label}
                </a>
              )}
            </div>

            <div className="flex-samples">
              <FlexMessage
                payload={{
                  type: 'flex',
                  altText: 'Flex Message',
                  contents: flexMessage,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
