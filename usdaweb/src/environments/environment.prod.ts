export const environment = {
  production: true,
  configuration: [{
    rebase: ['/', `http://localhost:3000/`],
    truncate: false
  }, {
    replace: ['/nutrients', 'http://localhost:3001/']
  }]
};
