'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var selectors = {
  textAlign: 'center',
  margin: '25px 0'
};

exports.selectors = selectors;
var leftButton = {
  position: 'relative',
  marginRight: '10px',
  display: 'inline-block',
  width: '2em',
  height: '2em',
  border: '0.25em solid darkgrey',
  borderRadius: '50%',
  verticalAlign: 'middle'
};

exports.leftButton = leftButton;
var leftButtonAfter = {
  position: 'absolute',
  display: 'inline-block',
  top: '0.4em',
  left: '0.5em',
  width: '0.7em',
  height: '0.7em',
  borderTop: '0.25em solid darkgrey',
  borderRight: '0.25em solid darkgrey',
  transform: 'rotate(-135deg)'
};

exports.leftButtonAfter = leftButtonAfter;
var rightButton = {
  position: 'relative',
  marginLeft: '10px',
  display: 'inline-block',
  width: '2em',
  height: '2em',
  border: '0.25em solid darkgrey',
  borderRadius: '50%',
  verticalAlign: 'middle'
};

exports.rightButton = rightButton;
var rightButtonAfter = {
  position: 'absolute',
  display: 'inline-block',
  top: '0.4em',
  right: '0.5em',
  width: '0.7em',
  height: '0.7em',
  borderTop: '0.25em solid darkgrey',
  borderLeft: '0.25em solid darkgrey',
  transform: 'rotate(135deg)'
};

exports.rightButtonAfter = rightButtonAfter;
var chartHeader = {
  border: 'solid 1px darkgrey',
  margin: '0 -1px -1px 0',
  padding: '0 4px',
  flexGrow: 0
};

exports.chartHeader = chartHeader;
var headerWrapper = {
  borderRight: 'solid 1px darkgrey'
};

exports.headerWrapper = headerWrapper;
var resourceSideBar = {
  border: 'solid 1px darkgrey',
  margin: '0 -1px -1px 0',
  textAlign: 'center'
};

exports.resourceSideBar = resourceSideBar;
var cell = {
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center'
};

exports.cell = cell;
var chart = {
  display: 'flex',
  flexWrap: 'wrap',
  borderBottom: 'solid 1px darkgrey',
  borderRight: 'solid 1px darkgrey'
};

exports.chart = chart;
var cellWrapper = {
  margin: '0 -1px -1px 0',
  border: 'solid 1px darkgrey'
};

exports.cellWrapper = cellWrapper;
var resourceWrapper = {
  display: 'flex',
  flexDirection: 'column'
};

exports.resourceWrapper = resourceWrapper;
var eventStyles = {
  position: 'relative',
  top: 0,
  left: '4px',
  borderRadius: '3px',
  padding: '2px 5px'
};

exports.eventStyles = eventStyles;
var partialEventStyles = {
  position: 'absolute',
  top: 0,
  right: '4px',
  borderRadius: '3px',
  padding: '2px 5px',
  textAlign: 'right'
};

exports.partialEventStyles = partialEventStyles;
var resizerStyles = {
  top: 0,
  right: 0,
  width: '5px',
  display: 'inline-block',
  position: 'absolute'
};

exports.resizerStyles = resizerStyles;
var boxStyles = {
  position: 'relative',
  borderRadius: '3px'
};

exports.boxStyles = boxStyles;
var eventHandleStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: 30,
  display: 'inline-block'
};
exports.eventHandleStyles = eventHandleStyles;