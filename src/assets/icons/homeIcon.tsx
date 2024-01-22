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
        d="M20.83 8.01l-6.55-5.24C13 1.75 11 1.74 9.73 2.76L3.18 8.01c-.94.75-1.51 2.25-1.31 3.43l1.26 7.54C3.42 20.67 4.99 22 6.7 22h10.6c1.69 0 3.29-1.36 3.58-3.03l1.26-7.54c.18-1.17-.39-2.67-1.31-3.42zM12.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3z"
        fill={color}
      />
    </Svg>
  );
};

export default Heart;
