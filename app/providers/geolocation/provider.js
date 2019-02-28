const { ServiceProvider } = require('@adonisjs/fold')

class GeoProvider extends ServiceProvider {
  register () {
    this.app.singleton('Geo/Location', () => {
        const Env = use('Env')
        const key = Env.get('GEO_API_KEY')
        return new (require('.'))(key)
    })
  }
}

module.exports = GeoProvider    