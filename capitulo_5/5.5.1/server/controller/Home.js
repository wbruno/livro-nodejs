const HomeController = {
  index (request, response) {
    response.status(201)
    response.json({ 'name': 'William Bruno', 'email': 'wbrunom@gmail.com' })
  }
}
export default HomeController
