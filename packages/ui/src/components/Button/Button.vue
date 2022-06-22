<script setup lang="ts">
export interface Props {
  type: 'button' | 'reset' | 'submit'
}

withDefaults(defineProps<Props>(), { type: 'button' })

interface Emits {
  (e: 'blur'): void;
  (e: 'click'): void;
  (e: 'focus'): void;
}
const emit = defineEmits<Emits>()

const events = {
  blur: (e: Event) => {
    emit('blur')
  },
  click: (e: MouseEvent) => {
    emit('click')
  },
  focus: (e: Event) => {
    emit('focus')
  },
}

</script>

<template>
  <button class="wrapper flex items-center bg-blue-500 text-white rounded border-none" :type="type" v-on="events" >
    <slot />
  </button>
</template>