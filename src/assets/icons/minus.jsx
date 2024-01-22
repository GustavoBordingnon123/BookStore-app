import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Minus(props) {
  return (
    <Svg
      width={20}
      height={4}
      viewBox="0 0 20 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.406 0H1.594C.714 0 0 .745 0 1.667s.714 1.666 1.594 1.666h16.812c.88 0 1.594-.744 1.594-1.666C20 .745 19.287 0 18.406 0z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Minus;
