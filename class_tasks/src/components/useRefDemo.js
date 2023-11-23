import { useRef } from 'react'

export default function REF() {
  const myRef = useRef(null)
  myRef.current = 'Hii'
  const handleClick = () => {
    console.log(myRef.current.value)
  }
  return (
    <>
      <input type="text" ref={myRef} />
      <button onClick={handleClick}></button>
    </>
  )
}
