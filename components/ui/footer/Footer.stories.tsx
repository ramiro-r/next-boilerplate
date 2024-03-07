import { ComponentMeta, ComponentStory } from '@storybook/react'
import Footer from './Footer'

export default {
  title: 'examples/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Base = Template.bind({})
