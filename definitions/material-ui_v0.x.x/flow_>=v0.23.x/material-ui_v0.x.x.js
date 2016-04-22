import React, { Component } from 'react';

declare module 'material-ui' {
  declare class AppBar extends React$Component {
      props: {
        /**
         * Can be used to render a tab inside an app bar for instance.
         */
        children?: React$Element,

        /**
         * Applied to the app bar's root element.
         */
        className?: string,
        /**
         * The classname of the icon on the left of the app bar.
         * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
         */
        iconClassNameLeft?: string,

        /**
         * Similiar to the iconClassNameLeft prop except that
         * it applies to the icon displayed on the right of the app bar.
         */
        iconClassNameRight?: string,

        /**
         * The custom element to be displayed on the left side of the
         * app bar such as an SvgIcon.
         */
        iconElementLeft?: React$Element,

        /**
         * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
         */
        iconElementRight?: React$Element,

        /**
         * Override the inline-styles of the element displayed on the right side of the app bar.
         */
        iconStyleRight?: Object,

        /**
         * Callback function for when the left icon is selected via a touch tap.
         *
         * @param {object} event TouchTap event targeting the left `IconButton`.
         */
        onLeftIconButtonTouchTap?: Function,

        /**
         * Callback function for when the right icon is selected via a touch tap.
         *
         * @param {object} event TouchTap event targeting the right `IconButton`.
         */
        onRightIconButtonTouchTap?: Function,

        /**
         * Callback function for when the title text is selected via a touch tap.
         *
         * @param {object} event TouchTap event targeting the `title` node.
         */
        onTitleTouchTap?: Function,

        /**
         * Determines whether or not to display the Menu icon next to the title.
         * Setting this prop to false will hide the icon.
         */
        showMenuIconButton?: boolean,

        /**
         * Override the inline-styles of the root element.
         */
        style?: Object,

        /**
         * The title to display on the app bar.
         */
        title?: React$Element | string,

        /**
         * Override the inline-styles of the app bar's title element.
         */
        titleStyle?: Object,

        /**
         * The zDepth of the component.
         * The shadow of the app bar is also dependent on this property.
         */
        zDepth?: number;
      };
      static defaultProps: {
        showMenuIconButton: true,
        title: '',
        zDepth: 1,
      };
  }

  declare var AutoComplete: React.Component;
  declare var Avatar: React.Component;
  declare var Badge: React.Component;
  declare var Card: React.Component;
  declare var CardActions: React.Component;
  declare var CardHeader: React.Component;
  declare var CardMedia: React.Component;
  declare var CardText: React.Component;
  declare var CardTitle: React.Component;
  declare var Checkbox: React.Component;
  declare var CircularProgress: React.Component;
  declare var DatePicker: React.Component;
  declare var Dialog: React.Component;
  declare var Divider: React.Component;
  declare var DropDownMenu: React.Component;
  declare var FlatButton: React.Component;
  declare var FloatingActionButton: React.Component;
  declare var FontIcon: React.Component;
  declare var GridList: React.Component;
  declare var IconButton: React.Component;
  declare var IconMenu: React.Component;
  declare var LeftNav: React.Component;
  declare var LinearProgress: React.Component;
  declare var List: React.Component;
  declare var ListItem: React.Component;
  declare var Menu: React.Component;
  declare var MenuItem: React.Component;
  declare var Paper: React.Component;
  declare var Popover: React.Component;
  declare var RadioButton: React.Component;
  declare var RadioButtonGroup: React.Component;
  declare var RaisedButton: React.Component;
  declare var RefreshIndicator: React.Component;
  declare var Slider: React.Component;
  declare var SelectField: React.Component;
  declare var Snackbar: React.Component;
  declare var Tab: React.Component;
  declare var Table: React.Component;
  declare var TableBody: React.Component;
  declare var TableFooter: React.Component;
  declare var TableHeader: React.Component;
  declare var TableHeaderColumn: React.Component;
  declare var TableRow: React.Component;
  declare var TableRowColumn: React.Component;
  declare var Tabs: React.Component;
  declare var TextField: React.Component;
  declare var TimePicker: React.Component;
  declare var Toggle: React.Component;
  declare var Toolbar: React.Component;
  declare var ToolbarGroup: React.Component;
  declare var ToolbarSeparator: React.Component;
  declare var ToolbarTitle: React.Component;
}
