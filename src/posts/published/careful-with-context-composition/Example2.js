import React from 'react'
import Button from '../../../components/Button'
import Spacer from '../../../components/Spacer'
// These can be found on my snippets page
import { randomRGB } from '../../../utils'
import useForceUpdate from '../../../hooks/useForceUpdate'
import { bs } from '../../../shevy'

const MyContext = React.createContext()
const useMyContext = () => React.useContext(MyContext)

function MyProvider({ children }) {
  const forceUpdate = useForceUpdate()

  return (
    <MyContext.Provider value={forceUpdate}>
      {children}
      <Box />
    </MyContext.Provider>
  )
}

function Box() {
  return (
    <div
      style={{
        backgroundColor: randomRGB(),
        borderRadius: 2,
        height: bs(4),
      }}
    />
  )
}

function Trigger() {
  const forceUpdate = useMyContext()

  return <Button onClick={forceUpdate}>Force Update</Button>
}

export default function App() {
  return (
    <MyProvider>
      <Spacer bottom={1}>
        <Trigger />
      </Spacer>
    </MyProvider>
  )
}
