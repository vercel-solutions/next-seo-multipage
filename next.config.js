module.exports = {
  async rewrites() {
    return [
      {
        source: '/:id',
        destination: '/product/:id'
      },
    ]
  }
}