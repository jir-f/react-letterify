## React letterify

React letterify is a simple react component that animates the letters of a string based on a passed properties.

| Property        | Required | Type         | Default value | Description                                                                                                                         |
| --------------- | -------- | ------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| letterifyString | true     | string       | ‘’            | String to be letterified and animated                                                                                               |
| animate         | true     | boolean      | false         | Boolean that triggers the animation                                                                                                 |
| delay           | false    | number       | 0.1ms         | Animation delay between letters                                                                                                     |
| speed           | false    | number       | 0.3ms         | Animation speed per letter                                                                                                          |
| direction       | false    | string       | inplace       | Direction of animation. This can be **up**, **down**, **left**, **right**, **inplace.**                                             |
| styleClasses    | false    | string array | [ ]           | CSS classes wanted to be applied                                                                                                    |
| translateValue  | false    | number       | 40px          | Translated value for each letter. For example, if the direction is down or up the translated value would be specific to the y axis. |
| color           | false    | string       | #000          | Text color. Hex string of the color without the **#**.                                                                              |

Examples:
```TSX
    <Letterify 
      letterifyString={"React letterify"}
      animate={false}
    />
```
```TSX
    <Letterify 
      letterifyString={"React letterify"}
      animate={false}
      direction={"up"}
      delay={"0.2"}
      speed={"0.2"}
      translateValue={"20"}
      styleClasses={['lettterify-me', 'example_css']}
      color={'0077be'}
    />
```

Letterify inplace


![](src/gifs/React_letterify_inplace.gif)


Letterify up

![](src/gifs/React_letterify_up.gif)


Letterify down


![](src/gifs/React_letterify_down.gif)


Letterfiy right

![](src/gifs/React_letterify_right.gif)


Letterify left

![](src/gifs/React_letterify_left.gif)


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).