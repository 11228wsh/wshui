<script>
  export default {
    name: 'WshTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String,
      effect: {
        type: String,
        default: 'light',
        validator(val) {
          return ['dark', 'light', 'plain'].indexOf(val) !== -1;
        }
      }
    },
    methods: {
      handleClose(event) {
        event.stopPropagation();
        this.$emit('close', event);
      },
      handleClick(event) {
        this.$emit('click', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    }
    // render(h) {
    //   const { type, tagSize, hit, effect } = this;
    //   const classes = [
    //     'wsh-tag',
    //     type ? `wsh-tag--${type}` : '',
    //     tagSize ? `wsh-tag--${tagSize}` : '',
    //     effect ? `wsh-tag--${effect}` : '',
    //     hit && 'is-hit'
    //   ];
    //   const tagEl = (
    //     <span
    //       class={ classes }
    //       style={{ backgroundColor: this.color }}
    //       on-click={ this.handleClick }>
    //       { this.$slots.default }
    //       {
    //         this.closable && <i class="wsh-tag__close wsh-icon-close" on-click={ this.handleClose }></i>
    //       }
    //     </span>
    //   );

    //   return this.disableTransitions ? tagEl : <transition name="wsh-zoom-in-center">{ tagEl }</transition>;
    // }
  };
</script>
