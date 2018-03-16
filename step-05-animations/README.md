# Step 05: Animations

## About
An animation lets an element gradually change from one style to another.

You can change as many CSS properties you want, as many times you want.

To use CSS animation, you must first specify some keyframes for the animation.

Keyframes hold what styles the element will have at certain times.

## How To Use
When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.

To get an animation to work, you must bind the animation to an element.

```css
#id-loader {
    border: 1px solid #ECEFF1; /* Light grey */
    border-radius: 50%;
    width: 120px;
    height: 120px;

    animation-name: colorchange ;
    animation-duration: 2s;
    animation-delay: 2s;
}

@keyframes colorchange{
    from {
        background-color: #fff;
    }

    to {
        background-color: #ECEFF1;
    }
}
```

## Progress
You can also define fixed progress values:
```css
#id-loader {
    border: 1px solid #ECEFF1; /* Light grey */
    background-color: #ECEFF1;
    border-radius: 50%;
    width: 120px;
    height: 120px;

    animation-name: colorchange ;
    animation-duration: 4s;
    animation-delay: 2s;
    animation-iteration-count: infinite;
}

@keyframes colorchange{
    0%   {background-color: #ECEFF1;}
    25%  {background-color: #CFD8DC;}
    50%  {background-color: #B0BEC5;}
    100% {background-color: #90A4AE;}
}
```

## Configuration
### Duration
The animation-duration property defines how long time an animation should take to complete.
```css
    animation-duration: 2s;
```
### Delay
The animation-delay property specifies a delay for the start of an animation.
```css
    animation-delay: 2s;
```
### Iteration Count
The animation-iteration-count property specifies the number of times an animation should run.
```css
    animation-iteration-count: infinite;
```

### Direction
The animation-direction property specifies whether an animation should be played forwards, backwards or in alternate cycles.

The animation-direction property can have the following values:

* normal - The animation is played as normal (forwards). This is default
* reverse - The animation is played in reverse direction (backwards)
* alternate - The animation is played forwards first, then backwards
* alternate-reverse - The animation is played backwards first, then forwards

```css
    animation-direction: reverse;
```

## Use Case
Learn how to build a loading animation in css.

```css
#id-loader {
    border: 1px solid #ECEFF1; /* Light grey */
    border-top: 1px solid #2196F3; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
```