import React from "react";
import Svg, { Path } from "react-native-svg";

interface HeartProps {
  size?: number;
  color?: string;
}

const Heart: React.FC<HeartProps> = ({ size = 19, color = '#DC3535' }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill={color}
    >
      <Path
        d="M13.127 3.103a4.122 4.122 0 00-3.299 1.656A4.122 4.122 0 006.53 3.103c-2.28 0-4.13 1.857-4.13 4.152 0 .884.141 1.702.386 2.46 1.174 3.714 4.792 5.935 6.582 6.544.252.089.668.089.921 0 1.79-.61 5.408-2.83 6.582-6.545a7.934 7.934 0 00.386-2.459c0-2.295-1.85-4.152-4.13-4.152z"
        fill={color}
      />
    </Svg>
  );
};

export default Heart;
