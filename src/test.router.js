export default {
  path: '/test',
  name: 'test',
  component: () => import(/** webpackChunkname: 'about' */'./views/Test.vue')
}