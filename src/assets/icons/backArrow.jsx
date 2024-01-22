import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Back(props) {
  return (
    <Svg
      width={12}
      height={20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.883 17.773a1.304 1.304 0 01-1.845 1.845l-.008-.01-.003.004-8.64-8.64.004-.003a1.298 1.298 0 01-.264-1.491 1.3 1.3 0 01.357-.452l-.01-.009 8.64-8.64.004.004.008-.008a1.304 1.304 0 011.845 1.844l-.01.008.004.004-7.81 7.81 7.723 7.723-.003.003.008.008z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Back;