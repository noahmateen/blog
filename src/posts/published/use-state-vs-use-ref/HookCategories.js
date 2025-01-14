import React from 'react'
import { bs } from '../../../shevy'
import { mq } from '../../../utils'

export default function HookCategories() {
  return (
    <div
      css={{
        backgroundColor: 'var(--colors-text)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 1,
      }}
    >
      <Category
        title="State Managers"
        items={['useState', 'useReducer', 'useContext', 'useRef']}
      />
      <Category title="Effects" items={['useEffect', 'useLayoutEffect']} />
      <Category
        title="Stabilizers"
        items={['useCallback', 'useMemo', 'useRef']}
      />
      <Category
        title="Miscellaneous"
        items={['useImperativeHandle', 'useDebugValue']}
      />
    </div>
  )
}

function Category({ title, items }) {
  return (
    <div
      css={{
        backgroundColor: 'var(--colors-background)',
        padding: bs(0.5),
        [mq.charlie]: {
          padding: bs(),
        },
      }}
    >
      <div
        css={{
          fontFamily: 'var(--fonts-catamaran)',
          fontWeight: 'bold',
          lineHeight: 1.2,
          textAlign: 'center',
          marginBottom: bs(0.5),
        }}
      >
        {title}
      </div>
      <ul
        css={{
          listStyle: 'none',
          marginBottom: 0,
          li: {
            marginBottom: 0,
            '+ li': {
              marginTop: bs(0.25),
            },
          },
        }}
      >
        {items.map(item => (
          <li key={item}>
            <code>{item}</code>
          </li>
        ))}
      </ul>
    </div>
  )
}
