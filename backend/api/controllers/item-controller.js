const itemService = require('../services/item')

module.exports.delete = async(request, h) => {
  return itemService.findByID(request.params.id)
  .then((item) => {
    if (!item) {
      return h.response({
        message: "Item Not Found"
      }).code(400)
    }
    if (item.owner_user_id != request.auth.credentials.id) {
      return h.response({
        message: "Not Your item"
      }).code(400)
    }

    return itemService.delete(request.params.id).then(del =>{
      return {
        Success: "Delete Success"
      }
    })
  })
}

module.exports.update = async(request, h) => {
  return itemService.findByID(request.params.id)
  .then((item) => {
    if (!item) {
      return h.response({
        message: "Item Not Found"
      }).code(400)
    }
    if (item.owner_user_id != request.auth.credentials.id) {
      return h.response({
        message: "Not Your item"
      }).code(400)
    }

    return itemService.update(request.params.id, {
      name: request.payload.name,
      quantity: request.payload.quantity
    }).then(update =>{
      if (update.length > 0) {
        return {
          Success: "Update Success"
        }
      } else {
        return h.response({
          message: "Update Failed"
        }).code(400)
      }
    })
  })
}

module.exports.get = async(request, h) => {
  return itemService.findAll()
}
