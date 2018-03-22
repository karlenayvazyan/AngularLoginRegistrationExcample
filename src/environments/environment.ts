// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA5JJWIM5XklhBSJjICFlN1887L7blMLcQ',
    authDomain: 'androidloginexcample.firebaseapp.com',
    databaseURL: 'https://androidloginexcample.firebaseio.com',
    projectId: 'androidloginexcample',
    storageBucket: 'androidloginexcample.appspot.com',
    messagingSenderId: '45656754700'
  },
  currentUser: 'currentUser'
};
