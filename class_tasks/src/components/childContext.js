import { useContext } from "react"
import {myContext} from './contextDemo';

export default function Child()
{
      const imContext = useContext(myContext)

      return (
        <>
          <h1>{imContext.name}</h1>
          <h2>{imContext.age}</h2>
          <h3>{imContext.college}</h3>
        </>
      )
}