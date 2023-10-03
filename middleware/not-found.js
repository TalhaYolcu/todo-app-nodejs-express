
//if the given route does not exists, handle request with an errro message
const notFound = (req,res) => res.status(404).send('Route does not exist')

module.exports = notFound