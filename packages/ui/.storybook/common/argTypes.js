const attrsTable = {
  table: {
    category: 'props',
    subcategory: 'attrs',
  },
}
export const eventHandlersTable = {
  table: {
    category: 'events',
    subcategory: 'from storybook',
  },
}
const disabled = { control: { type: 'boolean', default: false }, ...attrsTable }

export const input = {
  onInput: { action: 'onInput', ...eventHandlersTable },
  onChange: { action: 'onChange', ...eventHandlersTable },
  onBlur: { action: 'onBlur', ...eventHandlersTable },
  onFocus: { action: 'onFocus', ...eventHandlersTable },
  disabled,
  readonly: { control: { type: 'boolean', default: false }, ...attrsTable },
  // Value doesnt support updates from the vue component
  value: {
    control: false,
    description: 'Control disabled since SB does not react to updates',
  },
}

export const inputText = {
  ...input,
  placeholder: {
    control: { type: 'text' },
    defaultValue: 'Placeholder Text...',
    ...attrsTable,
  },
}

export const button = {
  disabled,
}
