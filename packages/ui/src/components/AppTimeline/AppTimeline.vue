<script setup lang="ts">
import type { TimelineStep } from './types'

interface Props {
  steps: Array<TimelineStep>
  currentStep: number
}

const props = defineProps<Props>()
</script>

<template>
  <ol class="steps" role="group" aria-label="progress">
    <li
      v-for="(step, idx) in steps"
      :key="idx"
      :class="{
        step: true,
        'step-done': idx < currentStep,
        'step-active': idx === currentStep,
        'step-todo': idx > currentStep,
      }"
      :aria-current="idx === currentStep ? 'current' : false"
      :aria-description="step.detailsHeader"
      :aria-label="step.text"
    >
      <div
        :class="{
          'step-dot': true,
          'step-dot-first': idx === 0,
          'step-dot-last': idx === steps.length - 1,
        }"
      >
        <div class="step-line-up">
          -
        </div>
        <div class="step-circle" />
        <div class="step-line-down">
          -
        </div>
      </div>
      <div class="step-left">
        {{ step.text }}
      </div>
      <div class="step-right">
        {{ step.date }}
      </div>
      <div class="sr-only">
        {{
          idx < currentStep || idx === currentStep
            ? 'completed'
            : 'not completed'
        }}
      </div>
      <div />
    </li>
  </ol>
  <div
    v-if="steps && currentStep < steps.length && (steps[currentStep].detailsHeader || steps[currentStep].detailsText)"
    :class="{
      notice: true,
      'notice-error': steps[currentStep].detailsTheme === 'error',
    }"
  >
    <strong>{{ steps[currentStep].detailsHeader }}</strong>
    {{ steps[currentStep].detailsText }}
  </div>
</template>

<style scoped>
/*
TODO: IMPROVE ALL STYLES
*/

.steps {
  @apply my-2;
}

.notice {
  @apply flex flex-col justify-between box-border;
  @apply bg-gray-lighter border border-gray-lighter rounded-md px-3 py-2;
  @apply type-body;
  @apply text-primary-text;
}

.notice-error {
  @apply bg-red-lighter text-red-text border-red-lighter;
}

.step {
  @apply flex;
  @apply w-full;
  font-size: 16px;

  .step-dot {
    @apply flex flex-col items-center;

    .step-line-up,
    .step-line-down {
      @apply bg-orange;
      @apply h-full;
      width: 2px;
      font-size: 1px;
    }

    .step-circle {
      @apply bg-orange;
      width: 8px;
      height: 8px;
      min-width: 8px;
      min-height: 8px;
      border-radius: 50%;
    }
  }

  .step-left {
    @apply flex flex-col font-bold justify-center w-full;
    padding-left: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .step-right {
    @apply flex flex-col justify-center text-right;
    white-space: nowrap;
  }

  .step-dot-first {
    .step-line-up {
      background: transparent !important;
    }
  }
  .step-dot-last {
    .step-line-down {
      background: transparent !important;
    }
  }
}
.step-active {
  .step-left {
    @apply text-orange;
  }

  .step-dot {
    .step-line-down {
      @apply bg-gray-lighter;
    }
  }
}
.step-todo {
  .step-left {
    @apply text-tertiary-text;
  }

  .step-dot {
    .step-line-up,
    .step-line-down,
    .step-circle {
      @apply bg-gray-lighter;
    }
  }
}
</style>
