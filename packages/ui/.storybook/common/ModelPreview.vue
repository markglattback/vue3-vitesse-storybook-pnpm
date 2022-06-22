<template>
  <!--Model Preview-->
  <div class="py-2 px-4 bg-gray-lighter border-grey-light rounded-md text-xs mt-8">
    <label class="font-bold">Model Preview</label>
    <pre>{{ value }}</pre>
  </div>
</template>
<script>
export default {
  name: 'ModelPreview',
  components: {},
  props: {
    value: {
      required: true,
    },
  },
}
</script>
