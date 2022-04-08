import notes from './AppTimeline.notes.md'
import AppTimeline from './AppTimeline.vue'
export default {
  title: 'App/Timeline',
  component: AppTimeline,
  argTypes: {
    currentStep: {
      control: { type: 'range', min: 0, max: 4, step: 1 },
    },
  },
  args: {
    steps: [{
      text: 'Transfer status 1',
      date: '',
      detailsHeader: 'Your transfer was submitted',
      detailsText: 'We\'re processing your transfer.',
      detailsTheme: '',
    },
    {
      text: 'Transfer status 2',
      date: '',
      detailsHeader: 'Your transfer was submitted',
      detailsText:
            'We\'re processing your transfer. We\'re processing your transfer. We\'re processing your transfer. We\'re processing your transfer.',
      detailsTheme: '',
    },
    {
      text: 'Transfer status 3 - Error',
      date: '',
      detailsHeader: 'Your transfer was submitted',
      detailsText:
            'We\'re processing your transfer. We\'re processing your transfer. We\'re processing your transfer. We\'re processing your transfer.',
      detailsTheme: 'error',
    },
    {
      text: 'Transfer status 4',
      date: '02/02/2025',
      detailsHeader: 'Your transfer was submitted',
      detailsText:
            'We\'re processing your transfer. We\'re processing your transfer. We\'re processing your transfer. We\'re processing your transfer.',
      detailsTheme: '',
    },
    {
      text: 'Transfer status 5',
      date: '02/02/2025',
      detailsHeader: 'Your transfer was submitted',
      detailsTheme: '',
    }],
    currentStep: 1,
  },
  parameters: {
    notes,
    status: 'wip',
    docs: {
      iframeHeight: 80,
    },
  },
}

const Template = args => ({
  components: { AppTimeline },
  setup() {
    return { ...args }
  },
  template: `
    <div class="w-64">
      <AppTimeline :steps="steps" :currentStep="currentStep" />
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  ...Default.args,
}

export const WithError = Template.bind({})
WithError.args = {
  currentStep: 2,
}

export const WithDate = Template.bind({})
WithDate.args = {
  currentStep: 3,
}
