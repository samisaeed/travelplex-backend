const getAll = (Model) => (req, res) => {
    Model.getAll()
      .then((resources) => res.status(200).json({ data: resources }))
      .catch((errors) => res.status(404).json(errors));
  };
  
  const getById = (Model) => (req, res) => {
    Model.getById(req.params.id)
      .then((resource) => res.status(200).json({ data: resource }))
      .catch((errors) => res.status(404).send(errors));
  };
  
  const create = (Model) => (req, res) => {
    Model.create(req.body)
      .then((resource) => res.status(201).json({ data: resource }))
      .catch((errors) => res.status(400).json(errors));
  };
  
  const deleteOne = (Model) => (req, res) => {
    Model.deleteOne(req.params.id)
      .then((resource) => res.status(200).json(resource))
      .catch((errors) => res.status(404).json(errors));
  };
  
  module.exports = {
    getAll,
    create,
    deleteOne,
    getById
  };
  