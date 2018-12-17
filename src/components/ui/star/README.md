## Star shared component

This component provides a common implementation of a Star SVG.

### Primary customization options:
1. Star can use two SVG values, namely, pointed star or rounded star version.
2. Size, color and fill percentage.
3. Eventhandlers. 

### props

##### `id` [String]
As normally there are multiple stars on same context, `id` is a required string for generating key for the each star.
```javascript
<!--default
  charCode: 4733,
  fill: 0,
  size: 50,
  fillColor: 'orange',
  emptyColor: 'lightgray',
  eventHandlers: {}
-->
<Star id="1" />
<Star id="2" />
```
##### `charCode` [Number] [default:4733]
An optional number to indicate style of star. Currently star supports two styles:
 - 4733: pointy 
 - 4734: rounded
```javascript
<!--rounded star-->
<Star id="1" charCode={4734}/>
```
##### `fill` [Number] [default:0]
An optional number to be used for filling the percentage of star. Use number between 0 to 1. 
```javascript
<!--50% filled with default orange and 50% with default lightgray-->
<Star id="1" fill={0.5}/>
```
##### `fillColor` [String] [default:orange]
An optional color code to be used for filled portion star. Use a value accepted by css color property.
```javascript
<!--50% filled with red and 50% with default lightgray-->
<Star id="1" fill={0.5} fillColor="#ff0000"/> 50% filled with red and 50% with default lightgray
```
##### `emptyColor` [String] [default:lightgray]
An optional color code to be used for empty portion star. Use a value accepted by css color property.
```javascript
<!--50% filled with red and 50% with white-->
<Star id="1" fill={0.5} fillColor="#ff0000" emptyColor="#ffffff"/>
```
##### `className` [Object]
`className` is emotion css class object which can be used override the component css.
```javascript
import { css } from 'emtoion';

<!--custom css className-->
const customClassName = css`
  min-width: 200px;
  height: 25px;
  padding: 0px;
  margin: 0px;
  display: table-row;

  &:hover {
    background-color: #F7F7F7;
  }
`;

<!--component with custom css-->
<Star id="1" className={customClassName}/>
```
##### `eventHandlers` [Functions]
Optional event handlers that can be attached to star component.
```javascript
<Star id="1" onClick: () => console.log('hello from onClick') />
```
