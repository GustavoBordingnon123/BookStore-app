import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Wallet(props) {
  return (
    <Svg
      width={25}
      height={20}
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.75 0H1.25C.5 0 0 .5 0 1.25v17.5C0 19.5.5 20 1.25 20h22.5c.75 0 1.25-.5 1.25-1.25V12.5h-8.75a2.507 2.507 0 01-2.5-2.5c0-1.375 1.125-2.5 2.5-2.5H25V1.25C25 .5 24.5 0 23.75 0z"
        fill="#D17842"
      />
    </Svg>
  )
}

export default Wallet;
