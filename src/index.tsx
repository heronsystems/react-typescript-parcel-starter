import * as React from "react"
import { render } from "react-dom"
import TodoListFunctional from "./components/example/functional"
import TodoListClass from "./components/example/class"
import Provider from "./Provider"

const App = () => {
  return (
    <Provider>
      <TodoListClass />
    </Provider>
  )
}

render(<App />, document.getElementById("root"))
