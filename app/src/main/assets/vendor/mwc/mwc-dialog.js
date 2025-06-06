/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
import { customElement } from 'lit/decorators.js';
import { DialogBase } from './mwc-dialog-base.js';
import { styles } from './mwc-dialog.css.js';
let Dialog = class Dialog extends DialogBase {
};
Dialog.styles = [styles];
Dialog = __decorate([
    customElement('mwc-dialog')
], Dialog);
export { Dialog };
//# sourceMappingURL=mwc-dialog.js.map