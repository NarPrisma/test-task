import { extend } from 'vee-validate'
import { postcodeValidator } from 'postcode-validator'

import {
  required,
  email,
  confirmed,
  max,
  min,
  between,
  regex,
  integer,
  length,
} from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required.',
})

extend('regex', {
  ...regex,
  message: 'This field does not match the regular expression pattern.',
})

extend('email', {
  ...email,
  message: 'Invalid email.',
})

extend('confirmed', {
  ...confirmed,
  message: 'Confirmation does not match.',
})

extend('max', {
  ...max,
  params: ['length'],
  message: 'The field must not have more than {length} characters.',
})

extend('min', {
  ...min,
  params: ['length'],
  message: 'The field field must not contain less than {length} characters.',
})

extend('between', {
  ...between,
  params: ['min', 'max'],
  message: 'This field must be between {min} and {max}.',
})

extend('begins_with_alphanumeric', {
  validate(value) {
    const regex = new RegExp('^[a-zA-Z0-9]')

    return regex.test(value)
  },
  message: 'Must begin with alphanumeric character.',
})

extend('alphanumeric_underscores_hyphens_spaces', {
  validate(value) {
    const regex = new RegExp('^[a-zA-Z0-9\\s_.]+$')

    return regex.test(value)
  },
  message:
    'Must only contain characters of alphanumeric/underscores/hyphens or spaces.',
})
extend('password_regexp', {
  validate(value) {
    const regex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?=#*$@+-.~%^&()_\\/{}[\\];:|])(?=.{12,30})'
    )
    return regex.test(value)
  },
  message:
    'Тhe password must contain at least one lowercase latin and up letters, one number and a special character',
})

extend('domainRegex', {
  validate(value) {
    const regex = new RegExp(
      /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g
    )

    return regex.test(value)
  },
  message: 'The entered line is not domain',
})

extend('fqdn', {
  validate(value) {
    const regex = new RegExp(
      /(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}$)/gm
    )

    return regex.test(value)
  },
  message: 'The entered line is not fully qualified domain name',
})

extend('integer', {
  ...integer,
  message: 'The {_field_} must be an integer.',
})
extend('ip', {
  validate(value) {
    const regex = new RegExp(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    )

    return regex.test(value)
  },
  message: 'The entered line is not IP address',
})
extend('ipv6', {
  validate(value) {
    const regex = new RegExp(
      /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/gi
    )

    return regex.test(value)
  },
  message: 'The entered line is not IP address',
})
extend('length', {
  ...length,
  message: 'This field length should be {length}.',
})

extend('postcode', {
  validate(value, { countryCode }) {
    try {
      return postcodeValidator(value, countryCode)
    } catch (e) {
      return postcodeValidator(value, 'INTL')
    }
  },
  message: 'Wrong zip code',
  params: ['countryCode'],
})
