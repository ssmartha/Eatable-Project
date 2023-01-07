import { CiSearch } from "react-icons/ci";

export default function SearchState({ message }){
  return (
  <div>
    <CiSearch style={{width: "120px", height: "120px"}}/>
    <p>{message}</p>
  </div>
  )
}
