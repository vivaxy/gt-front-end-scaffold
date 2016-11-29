## Scaffolding

- install GT `sudo npm i -g granturismo`

- `gt config add vivaxy/front-end-scaffold https://github.com/vivaxy/front-end-scaffold.git`

- `gt init`

- select `vivaxy/front-end-scaffold`

----------

basic configuration files for front end projects

```
├── node_modules      # node 依赖，需要加入 .gitignore
├── release           # 可执行代码目录，需要加入 .gitignore
│   ├── css           # css 输出文件
│   ├── html          # html 输出文件
│   └── js            # js 输出文件
├── scripts           # 工具
│   └── gt.js         # gt 工具
├── source            # 源码目录
│   ├── css           # css 源文件
│   ├── html          # html 源文件
│   └── js            # js 源文件
├── test              # 测试目录
├── .editorconfig     # editorconfig 配置文件
├── .eslintignore     # eslint 忽略文件
├── .eslintrc.json    # eslint 配置文件
├── .gitignore        # git 忽略文件
├── CHANGELOG.md      # 改动日志
├── LICENSE           # 开源许可证
├── package.json      # node 配置文件
└── README.md         # 说明文档
```
