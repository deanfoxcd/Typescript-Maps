/// <reference types="@types/google.maps" />

import { Map } from './Map';
import { Company } from './Company';
import { User } from './User';

const map = new Map('map');
const user = new User();
const company = new Company();

map.addMarker(user);
map.addMarker(company);
