import styled from 'styled-components/native';
import Colors from '../theme/Colors';
import FONTS from './Fonts';

interface TextProps {
  fontFamily?: string;
  color?: string;
}

export const LargeText = styled.Text<TextProps>`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : FONTS.LATO_REGULAR};
  font-size: 32px;
  color: ${props => (props.color ? props.color : Colors.black)};
`;

export const Title = styled.Text<TextProps>`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : FONTS.LATO_BOLD};
  font-size: 24px;
  color: ${props => (props.color ? props.color : Colors.black)};
`;

export const HeaderText = styled.Text<TextProps>`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : FONTS.LATO_REGULAR};
  font-size: 20px;
  color: ${props => (props.color ? props.color : Colors.black)};
  line-height: 30px;
`;

export const MdTitle = styled.Text<TextProps>`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : FONTS.LATO_REGULAR};
  font-size: 19px;
  color: ${props => (props.color ? props.color : Colors.black)};
  line-height: 27px;
`;

export const MediumText = styled.Text<TextProps>`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : FONTS.LATO_REGULAR};
  font-size: 16px;
  color: ${props => (props.color ? props.color : Colors.black)};
  line-height: 27px;
`;

export const HelperText = styled.Text<TextProps>`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : FONTS.LATO_REGULAR};
  font-size: 14px;
  color: ${props => (props.color ? props.color : Colors.black)};
  line-height: 18px;
  letter-spacing: 0.3px;
`;

export const SmallText = styled.Text<TextProps>`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : FONTS.LATO_REGULAR};
  font-size: 12px;
  color: ${props => (props.color ? props.color : Colors.black)};
  letter-spacing: 0.8px;
`;

export const ExtraSmallText = styled.Text<TextProps>`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : FONTS.LATO_REGULAR};
  font-size: 10px;
  color: ${props => (props.color ? props.color : Colors.black)};
  letter-spacing: 0.5px;
  line-height: 15px;
`;
