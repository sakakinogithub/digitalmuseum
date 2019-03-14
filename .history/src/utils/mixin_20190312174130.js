import { mapGetters, mapActions } from 'vuex'

export const MuseumHomeMixin = {
  computed: {
    ...mapGetters(['offsetY'])
  },
  methods: {
    ...mapActions(['setOffsetY'])
  }
}
