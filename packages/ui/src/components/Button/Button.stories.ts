import Button from './Button.vue'
import notes from './Button.notes.md'
import ICarbonSendFilled from '~icons/carbon/send-filled'
import type { Story, Meta } from '@storybook/vue3'
import type { Props } from './types'

export default {
  title: 'Button',
  args: {
    type: 'button',
  },
  argTypes: {
    type: {
      control: { type: 'select', options: ['button', 'reset', 'submit'] }
    }
  },
  parameters: {
    notes,
    status: 'wip',
    backgrounds: {
      default: 'gray',
    }
  }
} as Meta<Props>

const Template: Story<Props> = (args) => ({
  components: {
    Button,
  },
  setup() {
    return { args }
  },
  template: /* html */`
    <Button v-bind="args">Button</Button>
  `
})

export const Default = Template.bind({})

const WithIconTemplate: Story<Props> = (args) => ({
  components: {
    Button,
    ICarbonSendFilled,
  },
  setup() {
    return { args }
  },
  template: /* html */`
    <Button v-bind="args">
      Send
      <ICarbonSendFilled class="ml-3" width="1rem" height="1rem" />
    </Button>
  `
})

export const WithIcon = WithIconTemplate.bind({})