const Ziggy = {
  url: 'https://www.zhitiantu.com',
  port: null,
  defaults: {},
  routes: {
    login: { uri: 'login', methods: ['GET', 'HEAD'] },
    logout: { uri: 'logout', methods: ['POST'] },
    'password.email': { uri: 'forgot-password', methods: ['POST'] },
    'password.update': { uri: 'reset-password', methods: ['POST'] },
    'user-profile-information.update': {
      uri: 'user/profile-information',
      methods: ['PUT'],
    },
    'user-password.update': { uri: 'user/password', methods: ['PUT'] },
    'password.confirmation': {
      uri: 'user/confirmed-password-status',
      methods: ['GET', 'HEAD'],
    },
    'two-factor.enable': {
      uri: 'user/two-factor-authentication',
      methods: ['POST'],
    },
    'two-factor.disable': {
      uri: 'user/two-factor-authentication',
      methods: ['DELETE'],
    },
    'two-factor.qr-code': {
      uri: 'user/two-factor-qr-code',
      methods: ['GET', 'HEAD'],
    },
    'two-factor.recovery-codes': {
      uri: 'user/two-factor-recovery-codes',
      methods: ['GET', 'HEAD'],
    },
    telescope: { uri: 'telescope/{view?}', methods: ['GET', 'HEAD'] },
    'pictures.store': {
      uri: 'api/pictures',
      methods: ['POST'],
      bindings: { picture: 'id' },
    },
    'api.pictures.index': {
      uri: 'api/pictures',
      methods: ['GET', 'HEAD'],
      bindings: { picture: 'id' },
    },
    'api.pictures.collects.index': {
      uri: 'api/pictures/{picture}/collects',
      methods: ['GET', 'HEAD'],
      bindings: { picture: 'id' },
    },
    'api.collects.lock': {
      uri: 'api/collects/{collect}/lock',
      methods: ['POST'],
      bindings: { collect: 'id' },
    },
    'api.collects.unlock': {
      uri: 'api/collects/{collect}/unlock',
      methods: ['POST'],
      bindings: { collect: 'id' },
    },
    'api.collects.picture.remove': {
      uri: 'api/collects/{collect}/{picture}',
      methods: ['POST'],
      bindings: { collect: 'id', picture: 'id' },
    },
    'api.pictures.lock': {
      uri: 'api/pictures/{picture}/lock',
      methods: ['POST'],
      bindings: { picture: 'id' },
    },
    'api.pictures.unlock': {
      uri: 'api/pictures/{picture}/unlock',
      methods: ['POST'],
      bindings: { picture: 'id' },
    },
    'api.collects.index': { uri: 'api/collects', methods: ['GET', 'HEAD'] },
    'comments.index': { uri: 'api/comments', methods: ['GET', 'HEAD'] },
    'forgot-password': { uri: 'forgot-password', methods: ['GET', 'HEAD'] },
    'password.reset': { uri: 'reset-password', methods: ['GET', 'HEAD'] },
    register: { uri: 'register', methods: ['GET', 'HEAD'] },
    'pictures.index': {
      uri: 'pictures',
      methods: ['GET', 'HEAD'],
      bindings: { picture: 'id' },
    },
    'pictures.uploaded': {
      uri: 'pictures/uploaded/{key}',
      methods: ['GET', 'HEAD'],
      bindings: { picture: 'id' },
    },
    'pictures.open': {
      uri: 'pictures/open/{key}',
      methods: ['POST'],
      bindings: { picture: 'id' },
    },
    'pictures.hidden': {
      uri: 'pictures/hidden/{key}',
      methods: ['POST'],
      bindings: { picture: 'id' },
    },
    'pictures.show': {
      uri: 'pictures/{picture}',
      methods: ['GET', 'HEAD'],
      bindings: { picture: 'id' },
    },
    'comments.store': {
      uri: 'comments',
      methods: ['POST'],
      bindings: { comment: 'id' },
    },
    'like.store': { uri: 'like', methods: ['POST'] },
    'like.destroy': { uri: 'unlike', methods: ['POST'] },
    'collects.edit': {
      uri: 'collects/{collect}/edit',
      methods: ['GET', 'HEAD'],
      bindings: { collect: 'id' },
    },
    'collects.update': {
      uri: 'collects/{collect}',
      methods: ['POST'],
      bindings: { collect: 'id' },
    },
    'collects.destroy': {
      uri: 'collects/{collect}',
      methods: ['DELETE'],
      bindings: { collect: 'id' },
    },
    'collects.picture.store': {
      uri: 'collects/{collect}/{picture}',
      methods: ['POST'],
      bindings: { collect: 'id', picture: 'id' },
    },
    'collects.show': {
      uri: 'collects/{collect}',
      methods: ['GET', 'HEAD'],
      bindings: { collect: 'id' },
    },
    'collects.store': {
      uri: 'collects',
      methods: ['POST'],
      bindings: { collect: 'id' },
    },
    'collects.index': {
      uri: 'collects',
      methods: ['GET', 'HEAD'],
      bindings: { collect: 'id' },
    },
    'user.collects.index': {
      uri: 'user/{user}/collects',
      methods: ['GET', 'HEAD'],
    },
  },
}
'undefined' != typeof window &&
  void 0 !== window.Ziggy &&
  Object.assign(Ziggy.routes, window.Ziggy.routes)
