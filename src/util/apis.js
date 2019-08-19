const API = {
  // 获取联系人列表
  getContactList: {
    method: 'get',
    url: '/contactList'
  },
  // 新建联系人 form-data
  newContactForm: {
    method: 'post',
    url: '/contact/new/form'
  },
  // 编辑联系人
  editContact: {
    method: 'put',
    url: '/contact/edit'
  },
  // 删除联系人
  delContact: {
    method: 'delete',
    url: '/contact'
  }
}
export default API