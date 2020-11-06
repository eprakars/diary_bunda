const Model = require('../../models');

module.exports.findByID = ( id, transaction ) => {
  return Model.Item.findOne({
    where: {
      id
    }
  })
};

module.exports.update = (id, payload, transaction) => {
  return Model.Item.update({
    name: payload.name,
    quantity: payload.quantity
  }, {
    where: {
      id
    }
  })
}

module.exports.delete = (id, transaction) => {
  return Model.Item.destroy({
    where: {
      id: id
    }
  });
}

module.exports.findAll = () => {
  return Model.Item.findAll()
}
