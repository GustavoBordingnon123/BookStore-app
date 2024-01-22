import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Search(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.583 17.5a7.917 7.917 0 100-15.833 7.917 7.917 0 000 15.833zM17.75 18.333a.58.58 0 01-.408-.166l-1.55-1.55a.589.589 0 010-.825.589.589 0 01.825 0l1.55 1.55a.589.589 0 010 .825.616.616 0 01-.417.166z"
        fill="#f5f5f5"
      />
    </Svg>
  )
}

export default Search;