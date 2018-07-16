// Copyright 2018, Google, LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {getAPI, GoogleConfigurable} from '../../shared/src';
import {servicecontrol_v1} from './v1';

export const VERSIONS = {
  'v1': servicecontrol_v1.Servicecontrol,
};

export function servicecontrol(version: 'v1'): servicecontrol_v1.Servicecontrol;
export function servicecontrol(options: servicecontrol_v1.Options):
    servicecontrol_v1.Servicecontrol;
export function servicecontrol<T = servicecontrol_v1.Servicecontrol>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1'|servicecontrol_v1.Options) {
  return getAPI<T>('servicecontrol', versionOrOptions, VERSIONS, this);
}
