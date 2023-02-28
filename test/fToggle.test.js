import { describe, test, assert } from 'vitest'
import { mount } from '@vue/test-utils'
import { fToggle } from '#components'

describe('toggle', () => {
  assert.ok(fToggle.name)

  test('renders - radio', () => {
    const toggles = [
      { value: 'foo', label: 'Foo' },
      { value: 'bar', label: 'Bar' },
    ]
    const wrapper = mount(fToggle, {
      props: { modelValue: 'foo', toggles, radio: true }
    })
    const inputElements = wrapper.findAll('input')
    for (const el of inputElements) {
      if (el.element.value === 'foo') assert.include(el.attributes(), { checked: '' })
    }
  })
  test('renders - checkbox', () => {
    const toggles = [
      { value: 'foo', label: 'Foo' },
      { value: 'bar', label: 'Bar' },
    ]
    const wrapper = mount(fToggle, {
      props: { modelValue: ['foo'], toggles, checkbox: true }
    })
    const inputElements = wrapper.findAll('input')
    for (const el of inputElements) {
      if (el.element.value === 'foo') assert.include(el.attributes(), { checked: '' })
    }
  })
})


