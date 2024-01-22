import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function Visa(props) {
  return (
    <Svg
      width={50}
      height={17}
      viewBox="0 0 50 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M25.859 5.162c-.029 2.249 2.004 3.504 3.536 4.25 1.573.766 2.102 1.257 2.096 1.942-.012 1.048-1.256 1.51-2.42 1.528-2.03.032-3.21-.548-4.148-.986l-.73 3.421c.94.434 2.684.813 4.491.83 4.244 0 7.02-2.095 7.035-5.343.016-4.121-5.701-4.35-5.662-6.192.013-.558.546-1.154 1.714-1.306.578-.076 2.174-.135 3.984.698l.71-3.31C35.492.339 34.24 0 32.685 0c-3.995 0-6.804 2.123-6.826 5.162zM43.289.285c-.775 0-1.428.452-1.72 1.146l-6.06 14.472h4.24l.843-2.332h5.181l.49 2.332H50L46.739.285h-3.45zm.593 4.22l1.223 5.864h-3.35l2.127-5.865zM20.718.284l-3.342 15.618h4.04L24.756.285h-4.038zm-5.977 0l-4.206 10.63-1.7-9.038C8.634.867 7.845.285 6.97.285H.096L0 .74c1.411.306 3.015.8 3.986 1.328.595.323.764.606.96 1.373l3.222 12.463h4.27L18.984.285H14.74z"
        fill="url(#paint0_linear_100_938)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_100_938"
          x1={2298.71}
          y1={48.5382}
          x2={2345.44}
          y2={-1609.7}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#254AA5" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default Visa;