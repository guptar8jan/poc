import { css } from 'emotion';

export const bar = css`
  border-radius: 2px;
  height: 10px;
  display: block;
  background-image: linear-gradient(to bottom,rgba(255,255,255,.3) 0,rgba(255,255,255,0) 100%);
`;

export const cell = css`
  display: table-cell;
  vertical-align: middle;
`;

export const container = css`
  min-width: 200px;
  height: 25px;
  padding: 0px;
  margin: 0px;
  display: table-row;

  &:hover {
    background-color: #F7F7F7;
  }
`;

export const empty = css`
  background-color: #ccc;
`;

export const filled = css`
  background-color: #0066b4;
`;

export const fullBar = css`
  display: table-cell;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  vertical-align: middle;
`;

export const prefix = css`
  white-space: nowrap;
`;

export const rating = css`
  text-align: center;
`;

export const star = css`
  display: table-cell;
  vertical-align: middle;
`;
