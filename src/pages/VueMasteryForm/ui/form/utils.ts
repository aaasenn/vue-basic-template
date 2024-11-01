export const defaultFormValues = {
  input: '',
  select: '',
  textarea: ''
} as const

export type FormValues = typeof defaultFormValues;