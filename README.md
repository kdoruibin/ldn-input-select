# Description
_This component is intended to be used on **mobile devices**._

The `ldn-input-select` enables single selection on a menu of options using the HTML select element and option elements.
This component implements the [slds select blueprint](https://www.lightningdesignsystem.com/components/select/).

Users can interact with the input field by directly tapping on the input field. This will open the native select menu.

# Attributes
| Name        | Type     | Required | Default | Description                                                              |
| ----------- | -------- | -------- | ------- | ------------------------------------------------------------------------ |
| disabled    | Boolean  | false    | false   | if true, the input is disabled and users can't interact with it          |
| label       | String   | false    |         | If present, the label is displayed above the input                       |
| required    | Boolean  | false    | false   | If true, a red asterisk is shown before the label                        |
| defaultNone | Boolean  | false    | false   | If true, `--None--` is shown and selected as the default and first value |
| options     | Object[] | true     |         | List of options specified as `[{ value: String, label: String }]`        |
|             |          |          |         |                                                                          |

# Methods

| Name  | Arguments | Description                         |
| ----- | --------- | ----------------------------------- |
| focus |           | Sets focus on the select element    |
| blur  |           | Removes focus on the select element |
|       |           |                                     |

# Events
## change
This event is fired when the selected value changes.

The `change` event returns the following properties.

| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| value     | String | Value of the selected option |
|           |        |                              |

The `change` event have the following properties
| Property   | Value |
| ---------- | ----- |
| bubbles    | false |
| cancelable | false |
| composed   | false |

## focus
This event is fired when focus is set on the select element.

The `focus` event returns no properties.

The `focus` event has the following properties
| Property   | Value |
| ---------- | ----- |
| bubbles    | false |
| cancelable | false |
| composed   | false |

## blur
This event is fired when focus is removed from the select element.

The `blur` event returns no properties.

The `blur` event has the following properties
| Property   | Value |
| ---------- | ----- |
| bubbles    | false |
| cancelable | false |
| composed   | false |
