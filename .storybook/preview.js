
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
const customViewports = {
  Phone: {
    name: 'Iphone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  Ipad: {
    name: 'Ipad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
};


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
}
