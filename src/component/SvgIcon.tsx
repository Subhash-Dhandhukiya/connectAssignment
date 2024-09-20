import React from 'react';
import Colors from '../theme/Colors';

interface SvgIconProps {
  name: any;
  style?: any;
  width?: number;
  height?: number;
  color?: string;
  testID?: string;
}

const SvgIcon: React.FC<SvgIconProps> = props => {
  return (
    <props.name
      style={props.style}
      width={props.width || 25}
      height={props.height || 25}
      fill={props.color || Colors.transparent}
      testID={props.testID}
    />
  );
};

export default SvgIcon;
