export default function mixin(app) {
  app.mixin({
    data() {
      return {
        mixinVar: 'mixinVar',
      };
    },
    methods: {},
  });
}
