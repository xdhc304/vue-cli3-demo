export default {
  path: '/test',
  name: 'test',
  component: () => import(/* webpackChunkname: 'test' */'./views/Test.vue')
}