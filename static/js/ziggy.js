const Ziggy = {
  url: 'http://localhost',
  port: null,
  defaults: {},
  routes: {
    'filament.asset': { uri: 'admin/assets/{path}', methods: ['GET', 'HEAD'] },
    'filament.auth.login': { uri: 'admin/login', methods: ['GET', 'HEAD'] },
    'filament.auth.password.request': {
      uri: 'admin/forgot-password',
      methods: ['GET', 'HEAD'],
    },
    'filament.auth.password.reset': {
      uri: 'admin/reset-password/{token}',
      methods: ['GET', 'HEAD'],
    },
    'filament.image': { uri: 'admin/image/{path}', methods: ['GET', 'HEAD'] },
    'filament.dashboard': { uri: 'admin', methods: ['GET', 'HEAD'] },
    'filament.account': { uri: 'admin/account', methods: ['GET', 'HEAD'] },
    'filament.form-attachments.upload': {
      uri: 'admin/form-attachments',
      methods: ['POST'],
    },
    'filament.resources.collects.index': {
      uri: 'admin/resources/collects',
      methods: ['GET', 'HEAD'],
    },
    'filament.resources.collects.create': {
      uri: 'admin/resources/collects/create',
      methods: ['GET', 'HEAD'],
    },
    'filament.resources.collects.edit': {
      uri: 'admin/resources/collects/{record}/edit',
      methods: ['GET', 'HEAD'],
    },
    'filament.resources.comments.index': {
      uri: 'admin/resources/comments',
      methods: ['GET', 'HEAD'],
    },
    'filament.resources.comments.create': {
      uri: 'admin/resources/comments/create',
      methods: ['GET', 'HEAD'],
    },
    'filament.resources.comments.edit': {
      uri: 'admin/resources/comments/{record}/edit',
      methods: ['GET', 'HEAD'],
    },
    'filament.resources.pictures.index': {
      uri: 'admin/resources/pictures',
      methods: ['GET', 'HEAD'],
    },
    'filament.resources.pictures.create': {
      uri: 'admin/resources/pictures/create',
      methods: ['GET', 'HEAD'],
    },
    'filament.resources.pictures.edit': {
      uri: 'admin/resources/pictures/{record}/edit',
      methods: ['GET', 'HEAD'],
    },
    'filament.resources.users.index': {
      uri: 'admin/resources/users',
      methods: ['GET', 'HEAD'],
    },
    'filament.resources.users.create': {
      uri: 'admin/resources/users/create',
      methods: ['GET', 'HEAD'],
    },
    'filament.resources.users.edit': {
      uri: 'admin/resources/users/{record}/edit',
      methods: ['GET', 'HEAD'],
    },
    'filament.users.index': { uri: 'admin/users', methods: ['GET', 'HEAD'] },
    'filament.users.create': {
      uri: 'admin/users/create',
      methods: ['GET', 'HEAD'],
    },
    'filament.users.edit': {
      uri: 'admin/users/{record}/edit',
      methods: ['GET', 'HEAD'],
    },
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
    'livewire.message': { uri: 'livewire/message/{name}', methods: ['POST'] },
    'livewire.upload-file': { uri: 'livewire/upload-file', methods: ['POST'] },
    'livewire.preview-file': {
      uri: 'livewire/preview-file/{filename}',
      methods: ['GET', 'HEAD'],
    },
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
    'user.dashboard': { uri: 'dashboard', methods: ['GET', 'HEAD'] },
    'user.profile.update': { uri: 'user/{user}/profile', methods: ['PUT'] },
    'user.collects.index': {
      uri: 'user/{user}/collects',
      methods: ['GET', 'HEAD'],
      bindings: { collect: 'id' },
    },
  },
}

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes)
}

export { Ziggy }
