# docker_nuxt_spa

```
$git clone git@github.com:chanfuku/docker_nuxt_spa.git
$cd docker_nuxt_spa/docker/nuxt
$docker-compose up
※yarn installを実行するため初回は5分~10分程かかります。
```

- ブラウザで以下が表示されればOK
```
http://localhost:3000/
```

- Demo
[https://nuxt-spa-ebato.herokuapp.com/](https://nuxt-spa-ebato.herokuapp.com/){:target="_blank"}

- このプロジェクトは以下の手順で作成しました。
```
$cd docker_nuxt_spa/docker/nuxt
$docker-compose build
$docker-compose run --rm nuxt npx create-nuxt-app --overwrite-dir .
このプロジェクトでは下記を選択した。
✨  Generating Nuxt.js project in .
? Project name: nuxt_app
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: None
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection
)
? What is your GitHub username? chanfuku
? Version control system: Git
```
