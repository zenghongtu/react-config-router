# react-config-router

> A configuration router base on react-router v4

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

const historyOpts = {
  basename: '/react-config-router'
}

ReactDOM.render(createRouter(routes, {historyOpts}), document.getElementById('root'))

```

### use `history` anywhere (including with Redux)

```js
import {history} from 'react-config-router'

history.replace('/')
```

## API
createRouter(routes,options)
- routes 路由配置
- mode 路由类型 `hash | history`
- routerProps  传入Router中
- switchProps  传入子路由中
- historyOpts  传入 history 中, 更多配置参考 [history](https://github.com/ReactTraining/history)
- extraProps 其他 props 传入子路由


## License

MIT © [zenghongtu](https://github.com/zenghongtu)
