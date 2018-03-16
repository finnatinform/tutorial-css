# Step 04: Transitions
## About
CSS transitions allows you to change property values smoothly (from one value to another), over a given duration.

## How To Use
To create a transition effect, you must specify two things:
* the CSS property you want to add an effect to
* the duration of the effect

The transition effect will start when the specified CSS property (width) changes value.

```css
#id-element{
    /* Size */
    height: 200px;
    width: 600px;

    /*Styling*/
    font-size: 4em;
    color: #2196F3;
    background-color: #ECEFF1;
    cursor: pointer;

    display: flex;
    justify-content: center ;
    align-items: center;

    transition: 2s; 
}

#id-element:hover{
    color: #4CAF50;
}
```


## Configuration

### Multiple Property Values
This is also usable with multiple properties:
```css
#id-element:hover{
    color: #4CAF50;

    height: 300px;
    width: 900px;
}
```
For changing them separately, you cou define own transitions each:
```css
#id-element{
    /* Size */
    height: 200px;
    width: 600px;

    /*Styling*/
    font-size: 4em;
    color: #2196F3;
    background-color: #ECEFF1;
    cursor: pointer;

    display: flex;
    justify-content: center ;
    align-items: center;

    transition: 2s, width 0.5s, height 1s ;
}
```
### Speed Curve
The transition-timing-function property specifies the speed curve of the transition effect.

The transition-timing-function property can have the following values:

* ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
* linear - specifies a transition effect with the same speed from start to end
* ease-in - specifies a transition effect with a slow start
* ease-out - specifies a transition effect with a slow end
* ease-in-out - specifies a transition effect with a slow start and end
* cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function

```css
#id-element{
    /* Size */
    height: 200px;
    width: 600px;

    /*Styling*/
    font-size: 4em;
    color: #2196F3;
    background-color: #ECEFF1;
    cursor: pointer;

    display: flex;
    justify-content: center ;
    align-items: center;

    transition-duration: 1s;
    transition-timing-function: ease;
}
```

### Delay
The transition-delay property specifies a delay (in seconds) for the transition effect.

```css
#id-element{
    /* Size */
    height: 200px;
    width: 600px;

    /*Styling*/
    font-size: 4em;
    color: #2196F3;
    background-color: #ECEFF1;
    cursor: pointer;

    display: flex;
    justify-content: center ;
    align-items: center;

        
    transition: 2s, width 0.5s, height 1s ;
    transition-delay: 5s;
}
```