<template>
  <transition
    enter-active-class="weui-animate-fade-in"
    leave-active-class="weui-animate-fade-out"
  >
    <div
      :class="{ 'weui-toast_text': type === 'text' }"
      class="weui-toast"
      ref="toast"
      v-show="visible"
    >
      <wv-icon
        :type="icon"
        class="weui-icon_toast"
        v-if="type !== 'text' && type !== 'loading'"
      />
      <wv-spinner
        :size="25"
        :type="spinnerType"
        class="weui-icon_toast"
        v-if="type === 'loading' && spinnerType !=='none'"
      />
      <p class="weui-toast__content" v-text="message"/>
    </div>
  </transition>
</template>

<script>
import { create } from '../utils'
import WvIcon from '../icon/index'
import WvSpinner from '../spinner/index'
import PopupMixin from '../mixins/popup'

export default create({
  name: 'toast',

  components: {
    WvIcon,
    WvSpinner
  },

  mixins: [PopupMixin],

  props: {
    mask: {
      default: true
    },
    icon: {
      type: String,
      default: 'success-no-circle'
    },
    type: {
      type: String,
      default: 'success',
      validator: (value) => {
        return ['success', 'fail', 'loading', 'text', 'html'].indexOf(value) !== -1
      }
    },
    spinnerType: {
      type: String,
      default: 'default'
    },
    message: {
      type: String,
      default: ''
    },
    maskClass: {
      default: 'weui-mask_transparent'
    }
  }
})
</script>
