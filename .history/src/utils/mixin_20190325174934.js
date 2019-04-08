import { mapGetters, mapActions } from 'vuex'

export const MuseumHomeMixin = {
  computed: {
    ...mapGetters([
      'offsetY',
      'hotSearchOffsetY',
      'flapCardVisible'
    ])
  },
  methods: {
    ...mapActions([
      'setOffsetY',
      'setHotSearchOffsetY',
      'setFlapCardVisible'
    ]),
    showBookDetail (book) {
      this.$router.push({
        path: '',
        query: {
          
        }
      })
    }
  }
}
