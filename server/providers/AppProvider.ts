import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
  }

  public async boot () {
    // IoC container is ready
  }

  public async ready () {
      const App = await import('@ioc:Adonis/Core/Application')
      // to avoid importing the socket on ace commands
      if (App.default.environment === 'web') {
          await import('../start/socket')
      }
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}