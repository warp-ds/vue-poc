import { describe, test, assert } from 'vitest'
import { mount } from '@vue/test-utils'
import { fCard } from '#components'
import { card as cardClasses } from '@fabric-ds/css/component-classes'

describe('card', () => {
  assert.ok(fCard.name)

  test('is such a card', () => {
    const defaultSlot = '<h1>Hello Fabric</h1>'
    const wrapper = mount(fCard, { slots: { default: defaultSlot } })
    assert.equal(wrapper.text(), 'Hello Fabric')
    cardClasses.card.split(' ').forEach(c => assert.include(wrapper.classes(), c))
  })
  test('cards any DOM element', () => {
    const defaultSlot = '<h1>Hello Fabric</h1>'
    const as = 'section'
    const wrapper = mount(fCard, { props: { as }, slots: { default: defaultSlot } })
    const html = wrapper.get(as)
    assert.ok(html.html())
  })
})
