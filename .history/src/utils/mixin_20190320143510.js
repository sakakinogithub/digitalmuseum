import { mapGetters, mapActions } from 'vuex'

export const MuseumHomeMixin = {
  computed: {
    ...mapGetters([
      'offsetY',
      'hotSearchOffsetY'
    ])
  },
  methods: {
    ...mapActions(['setOffsetY'])
  }
}
