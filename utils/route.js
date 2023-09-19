const resource = (path, controller, app) => {
  app.get(`${path}`, controller.all)
  app.get(`${path}/:id`, controller.detail)
  app.post(`${path}`, controller.store)
  app.patch(`${path}/:id`, controller.update)
  app.delete(`${path}/:id`, controller.destroy)
}

module.exports = { resource }