# Step 06: Modules
## About
When developing projects with react/tsx in the past, we linked the css file to the index.html.
But what, if we want to split the css declarations in the same parts as we plsit our code?
For this usecase, you can use css-modules.
Just like importing a code-module, you can import css-modules with css.
Similar to typescript, all you need, is a typings file.

## Infrastructure
First we create a npm project and install our environment
```
npm init -y
npm install --save-dev webpack webpack-cli typescript awesome-typescript-loader source-map-loader
npm install --save react react-dom @types/react @types/react-dom
```
tsconfig.json:
```json
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es5",
        "jsx": "react"
    },
    "include": [
        "./src/**/*"
    ]
}
```

webpack.config.js:
```javascript
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
```

## CSS Modules
For using css modules, we only need a webpack loader, which generates our typings files.
So we install this loader:
```
npm install --save-dev typings-for-css-modules-loader style-loader css-loader
```

And add a new rule for it:
```javascript
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true
                        }
                    }
                ]
            }
```

Now we can import our css file:
```tsx
import React = require("react");
import { ReactNode } from "react";
import * as Styles from './index.css' ;

export class TestComponent extends React.Component<{},{}>{
    render(): ReactNode{
        return(
            <div className={Styles.test} />
        );
    }
}
```

We can now build/generate css modules with calling webpack twice:
```
webpack
webpack
```