import { LightningElement, api, track } from 'lwc';

const OPTION_NONE = { value: "", label: "--None--" };

export default class LdnInputSelect extends LightningElement {
    @api disabled;
    @api required;
    @api label;
    @track _options = [];
    _selectedValue;
    _defaultNone;
    
    @api
    get defaultNone() {
        return this._defaultNone;
    }
    set defaultNone(value) {
        this._defaultNone = value;
        this._options = [OPTION_NONE, ...this._options];
    }

    @api 
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = this.defaultNone ? [OPTION_NONE, ...value] : [...value];
        this._selectedValue = this._options[0];
    }

    @api 
    get selectedValue() {
        return this._selectedValue;
    }
    set selectedValue(value) {
        this._selectedValue = value;
    }

    @api 
    focus() {
        this.selectElement.focus();
    }

    @api
    blur() {
        this.selectedValue.blur();
    }

    handleChange(event) {
        event.preventDefault();
        event.stopPropagation();

        this._selectedValue = this.selectElement.value;

        this.dispatchEvent(
            new CustomEvent('change', {
                bubbles: false,
                composed: false,
                detail: {
                    value: this._selectedValue,
                },
            })
        );
    }

    handleFocus(event) {
        this.dispatchEvent(new CustomEvent('focus'));
    }

    handleBlur(event) {
        this.dispatchEvent(new CustomEvent('blur'));
    }
    
    get selectElement() {
        return this.template.querySelector('select');
    }
}
