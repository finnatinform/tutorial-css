# Step 02: Basics

## About
Here are some of the most used css properties.

## Centering
The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.
```css
.centering{
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: #fff;
    background-color: #607D8B;
}
```

## Font
The CSS font properties define the font family, boldness, size, and the style of a text.
```css
.font{
    font-family: 'Segoe UI Light', sans-serif;
    font-size: 4em;
    font-weight: 100 ;
    font-style: italic ;
}
```

## Border
The CSS border properties allow you to specify the style, width, and color of an element's border.
```css
.border{
    border: #03A9F4 solid 5px ;
    border-right: none;
}
```

## Background
The CSS background properties are used to define the background effects for elements.

CSS background properties:

* background-color
* background-image
* background-repeat
* background-attachment
* background-position

```css
.background{
    background: url('./image.jpg') ;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
```
## Shadow
With CSS you can add shadow to text and to elements.
```css
.shadow{
    width: 400px;
    height: 100px;

    background-color: #607D8B;

    /*box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit;*/
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
```

## Position
The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).

```css
.position{
    position: fixed;
    top: 200px;
    left: 200px;

    height: 200px;
    width: 600px;
    background-color: #03A9F4;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
    color: #fff;
}
```

## Opacity
The opacity property specifies the opacity/transparency of an element.

```css
.opacity{
    opacity: 0.2;
    color: #222;
}
```

## Visibility
```css
.visibility{
    visibility: hidden ;
}
```
## Display
```css
.display{
    display: none;
}
```

## HTML Code
```html
        <div class="element centering">
            Hallo
        </div>
        <div class="element font centering">
            Hallo
        </div>

        <div class="element background"></div>
        <div class="element opacity font centering">
            Invisible
        </div>
        <div class="element centering">
            <div class="shadow" />
        </div>
        <div class="position">
            Overlay
        </div>
        <div class="element visibility font">
            Unvisible
        </div>
        <div class="element display font">
            Not displayed
        </div>
```