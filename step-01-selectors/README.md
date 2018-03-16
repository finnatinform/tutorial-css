# Step 01: Selectors
In CSS you can style elements, but you have to declare which Element to style.
For this you must use Selectors.

## Elements
```css
/* Element Selectors */
html,
body{
    margin: 0;
    padding : 0;

    width: 100%;
    height: 100%;
}
```

## Class
```css
/*Class Selectors*/
.wrapper{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center ;
    align-items: center;
}
```

## Id
```css
/* Id-Selector */
#id-text{
    font-size: 4em;
}

```
## Parent/child
```css
/* Selects all <p> elements inside <div> elements */
.wrapper .text{
    font-size: 4em;
}

/* 	Selects all <p> elements where the parent is a <div> element */
.wrapper > .text{
    font-size: 4em;
}
```