<template>
  <div :class="baseClasses">
    <slot />
  </div>
</template>

<script>
export default { name: 'fTag' }
</script>

<script setup>
import { ribbon as c } from '@fabric-ds/css/component-classes'
import { computed } from 'vue'

const props = defineProps({
  primary: {
    type: Boolean,
    required: true
  },
  topLeft: Boolean,
  topRight: Boolean,
  bottomLeft: Boolean,
  bottomRight: Boolean,
  info: Boolean,
  success: Boolean,
  warning: Boolean,
  error: Boolean,
  disabled: Boolean,
  sponsored: Boolean,
  neutral: Boolean
})

const baseClasses = computed(() => ({
  [c.base]: props.primary,
  ['rounded-tr-0 rounded-bl-0']: props.topLeft || props.bottomRight,
  ['rounded-tl-0 rounded-br-0']: props.topRight || props.bottomLeft,
  [c.info]: props.info,
  [c.success]: props.success,
  [c.warning]: props.warning,
  [c.error]: props.error,
  [c.disabled]: props.disabled,
  [c.sponsored]: props.sponsored,
  [c.neutral]: props.neutral
}))
</script>
