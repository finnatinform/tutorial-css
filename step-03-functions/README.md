# Step 03 : Functions

## About
CSS holds a collection of functions, which you can use.
Here are two examples given.

## calc()
The calc function gives you the opportunity to do calculations:
```css
/*Variables*/
/*...*/
#id-element {
    border: 1px solid #ECEFF1; /* Light grey */
    background-color: #ECEFF1;
    border-radius: 50%;
    width: 600px;
    height: calc( 600px / 3 );
}
```

## var()
By using the var function, you can access variables:
Variables always begins with "--" and are defined in root space. 
You can access them by the var()-function
```css
/*Variables*/
:root{
    /*Put Variables here*/
    --size-default : 120px;
}
/*...*/
#id-element {
    border: 1px solid #ECEFF1; /* Light grey */
    background-color: #ECEFF1;
    border-radius: 50%;
    width: var(--size-default);
    height: var(--size-default);
}
```