import {Model} from './model';

export class Confidential extends Model {
  oldPassword?: string;
  newPassword?: string;
}
