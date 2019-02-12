/* global window document Vue axios */
Vue.component('nav-link', {
  props: {
    linkdata: {
      type: Object,
      required: true
    },
    right: Boolean,
    handler: String
  },
  template: '<li v-bind:style="styleObj" :onclick="handler" v-on:click="navLinkPassThrough">\n' +
  '<a class="nav-link" :href="linkdata.href">{{ linkdata.text }}</a>\n' +
  '</li>',
  computed: {
    styleObj: function() {
      if(!this.right) {
        return {
          'padding': '.25rem .25rem .25rem 1.5rem',
          'list-style': 'none'
        };
      }
      return {
        'padding': '.25rem 1rem .25rem 1rem',
        'list-style': 'none'
      };
    }
  },
  methods: {
    navLinkPassThrough: function() {
      if(!empty(this.linkdata.href, 'string') && this.linkdata.href !== '#') {
        this.$el.querySelector('a').click();
      }
    }
  }
});

const hasHandler = [];
const handlersRegistered = [];
Vue.directive('attach-click-handler', {
  inserted: function(el, binding) {
    const toAttach = binding.modifiers.parent ? el.parentElement : el;
    const listener = function() {
      window.location = binding.value;
    };
    let i = hasHandler.indexOf(toAttach);
    if(i === -1) {
      i = hasHandler.length;
    }
    hasHandler[i] = toAttach;
    if(empty(handlersRegistered[i], 'array')) {
      handlersRegistered[i] = [listener];
    } else {
      handlersRegistered[i].push(listener);
    }
    toAttach.addEventListener('click', listener);
  },
  update: function(el, binding) {
    if(binding.modifiers.volatile) {
      const toAttach = binding.modifiers.parent ? el.parentElement : el;
      let i = hasHandler.indexOf(toAttach);
      if(i !== -1) {
        const currentHandlers = handlersRegistered[i].splice(0);
        currentHandlers.forEach(e => {
          toAttach.removeEventListener('click', e);
        });
      } else {
        i = hasHandler.length;
      }
      const listener = function() {
        window.location = binding.value;
      };
      hasHandler[i] = toAttach;
      if(empty(handlersRegistered[i], 'array')) {
        handlersRegistered[i] = [listener];
      } else {
        handlersRegistered[i].push(listener);
      }
      toAttach.addEventListener('click', listener);
    }
  }
});

Vue.directive('add-child-class', {
  inserted: function(el, binding, vnode) {
    if(!empty(binding.value, 'string')) {
      vnode.context.$nextTick(() => {
        Array.from(el.children).forEach(cEl => {
          cEl.classList.add(binding.value);
        });
      });
    }
  }
});
