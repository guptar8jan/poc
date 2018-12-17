## Histogram shared component

This component provides a common implementation for a histogram to display rating distribution.

### Primary customization options:
1. Custom Star component.
2. Color, empty and full colors.
3. CSS, and eventhandlers. 


### props

##### `reviewCounts` [Array]
Review counts to generate the histogram.
```javascript
<!--default
  fillColor: 'orange',
  emptyColor: 'lightgray',
  eventHandlers: {}
-->
const reviewCounts = [
  { rating: 5, count: 100 },
  { rating: 4, count: 20 },
  { rating: 3, count: 30 },
  { rating: 2, count: 40 },
  { rating: 1, count: 10 },
];
<Histogram reviewCounts={reviewCounts} />
```
##### `fillColor` [String] [default:orange]
An optional color code to be used for filled portion of the rows.
```javascript
<!--component with custom css-->
<Histogram reviewCounts={reviewCounts} fillColor="#ff0000"/>
```
##### `emptyColor` [String] [default:lightgray]
An optional color code to be used for empty portion of the rows.
```javascript
<!--50% filled with red and 50% with white-->
<Histogram reviewCounts={reviewCounts} fillColor="#ff0000" emptyColor="#ffffff"/>
```
##### `star` [String]
Star component to be displayed on left side of the row to display the star rating of the row.
```javascript
const star = <Star id="1" fillColor="#ff0000" emptyColor="#ffffff"/>
<Histogram reviewCounts={reviewCounts} star={star}}/>
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
<Histogram reviewCounts={reviewCounts} className={customClassName}/>
```
##### `eventHandlers` [Functions]
Optional event handlers that can be attached to star component.
```javascript
<Histogram reviewCounts={reviewCounts}  onClick: () => console.log('hello from onClick') />
```
