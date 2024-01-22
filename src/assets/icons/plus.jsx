import * as React from "react"
import Svg, { Path } from "react-native-svg"


function PlusIcon(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.406 8.333h-6.74v-6.74C11.667.714 10.923 0 10 0c-.922 0-1.667.714-1.667 1.594v6.74h-6.74C.714 8.333 0 9.077 0 10c0 .922.714 1.667 1.594 1.667h6.74v6.74c0 .88.744 1.593 1.666 1.593.922 0 1.667-.713 1.667-1.594v-6.74h6.74c.88 0 1.593-.744 1.593-1.666 0-.922-.713-1.667-1.594-1.667z"
        fill="#fff"
      />
    </Svg>
  )
}

export default PlusIcon;
