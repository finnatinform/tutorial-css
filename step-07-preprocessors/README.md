# Step 08: Preprocessors
## About
Similar to Typescript for JavaScript, there are preprocessor languages for CSS.
The most famous solutions are [Sass](https://sass-lang.com/) and [Less](http://lesscss.org/).
Today we will Sass.

## How to use
For installing Sass we will need [Ruby](https://rubyinstaller.org/).
After that, we can install sass with
```
gem install --http-proxy http://192.168.245.225:80 sass
```

Now we create a demo file:
```scss
$fullsize : 100%;
$zero : 0 ;

body,
html{
    width: $fullsize;
    height: $fullsize ;

    margin: $zero ;
    padding: $zero ;
}
```

Finally we can transpile our Sass Code by
```
sass test.scss test.css
```

## Nesting
```scss
.test{
    width: 800px;
    .test-child{
        width: 50%;
    }
}
```

## Extend/Inheritance
```scss
%parent{
    width: 100%;
}

child{
    @extend %parent ;
    height: 100%;
}
```