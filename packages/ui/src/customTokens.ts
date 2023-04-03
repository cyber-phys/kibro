import { createTokens } from 'tamagui';
import { themes, tokens } from '@tamagui/theme-base'

export const customTokens = createTokens({
  color: {
    ...tokens.color,
    primary1: '#00C1B5',
    primary2: '#FFDE2D',
    background1: '#FFFFFF',
    background2: '#F5F5F5',
    background3: '#CCCCCC',
    highlight1: '#42A4FF',
    text1: '#5E5E5E',
    categoryYellow: '#FFE871',
  },
  space: {
    ...tokens.space,
    controlbarHeight: 60,
    headerHeight: 60,
  },
  size: {...tokens.size},
  radius: {...tokens.radius},
  zIndex: {...tokens.zIndex},
});