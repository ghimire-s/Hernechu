//in .storybook/config.js
import React from 'react'
import { addDecorator } from '@storybook/react'
import WithProvider from './decorators'

// ...

addDecorator(story => <WithProvider>{story()}</WithProvider>)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}