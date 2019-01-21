# react-config-router

>

[![NPM](https://img.shields.io/npm/v/react-config-router.svg)](https://www.npmjs.com/package/react-config-router) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-config-router
```

## Usage

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import createRouter from 'react-config-router'


const routes = [
   {
     path: '/user',
     component: UserLayout,
     routes: [
       {path: '/user', redirect: '/user/login', exact: true},
       {
         path: '/user/login',
         component: Login
       },
       {
         path: '/user/:name',
         component: User
       }
     ]
   },
]

ReactDOM.render(createRouter(routes), document.getElementById('root'))

```

## License

MIT © [zenghongtu](https://github.com/zenghongtu)
