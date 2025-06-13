/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { __decorate } from "tslib";
// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore
import { customElement } from 'lit/decorators.js';
import { styles } from '@material/mwc-top-app-bar/mwc-top-app-bar.css.js';
import { TopAppBarFixedBase } from './mwc-top-app-bar-fixed-base.js';
let TopAppBarFixed = class TopAppBarFixed extends TopAppBarFixedBase {
};
TopAppBarFixed.styles = [styles];
TopAppBarFixed = __decorate([
    customElement('mwc-top-app-bar-fixed')
], TopAppBarFixed);
export { TopAppBarFixed };
//# sourceMappingURL=mwc-top-app-bar-fixed.js.map