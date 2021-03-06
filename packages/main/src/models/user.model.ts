import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order} from './order.model';

@model({
  settings: {
    hiddenProperties: ['password', 'confirmHash', 'confirmed'],
  },
})
export class User extends Entity {
  constructor(data?: Partial<User>) {
    super(data);
  }

  @property({
    type: 'string',
    required: true,
  })
  userName: string;

  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  avatar?: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'boolean',
    default: false,
  })
  confirmed?: boolean;

  @property({
    type: 'string',
  })
  confirmHash?: string;

  @hasMany(() => Order)
  orders: Order[];
}
