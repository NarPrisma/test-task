<template>
  <ValidationProvider
    v-slot="{ errors }"
    mode="lazy"
    tag="div"
    :name="name"
    :rules="rules"
  >
    <label
      v-if="showLabel"
      :for="id"
      class="block text-sm font-medium text-left"
      :class="errors.length ? 'text-red-600' : 'text-base-gray-800'"
    >
      {{ label }}
    </label>
    <div class="relative rounded-md">
      <input
        :id="id"
        ref="text-field-input"
        v-model="localValue"
        :readonly="disabled"
        :placeholder="placeholder"
        v-bind="$attrs"
        :type="type"
        :class="[
          errors.length ? 'text-red-600 border-error' : '',
        ]"
        class="login__input"
        @blur="$emit('blured', errors)"
      />
    </div>
    <div v-if="errors.length" class="text-error font-normal text-sm">
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script>

import { ValidationProvider } from 'vee-validate'

export default {
  name: 'TextField',

  components: {
    ValidationProvider,
  },

  inheritAttrs: false,

  props: {
    showLabel: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: [String, Object],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: 'lazy',
    },
  },

  data() {
    return {
      showPassword: false,
      localValue: this.value,
    }
  },

  watch: {
    value(newText) {
      this.localValue = newText
    },

    localValue(newText) {
      this.$emit('input', newText)
    },
  },
}
</script>
