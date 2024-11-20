```javascript
export const regions = {
  'us-domestic': {
    name: 'US Domestic (Outsourced)',
    currencies: ['USD'],
    amazenEnabled: true,
    packagingEnabled: true
  },
  'us-international': {
    name: 'US International (Outsourced)',
    currencies: ['USD'],
    amazenEnabled: true,
    packagingEnabled: true
  },
  'us-wms-domestic': {
    name: 'US WMS Domestic',
    currencies: ['USD'],
    amazenEnabled: false,
    packagingEnabled: false
  },
  'us-wms-international': {
    name: 'US WMS International',
    currencies: ['USD'],
    amazenEnabled: false,
    packagingEnabled: false
  },
  'ca-domestic': {
    name: 'Canada Domestic',
    currencies: ['USD', 'CAD'],
    amazenEnabled: true,
    packagingEnabled: true
  },
  'ca-international': {
    name: 'Canada International',
    currencies: ['USD', 'CAD'],
    amazenEnabled: true,
    packagingEnabled: true
  },
  'nl-domestic': {
    name: 'Netherlands Domestic',
    currencies: ['USD', 'EUR'],
    amazenEnabled: true,
    packagingEnabled: true
  },
  'nl-international': {
    name: 'Netherlands International',
    currencies: ['USD', 'EUR'],
    amazenEnabled: true,
    packagingEnabled: true
  },
  'au-domestic': {
    name: 'Australia Domestic',
    currencies: ['USD', 'AUD'],
    amazenEnabled: true,
    packagingEnabled: true
  },
  'au-international': {
    name: 'Australia International',
    currencies: ['USD', 'AUD'],
    amazenEnabled: true,
    packagingEnabled: true
  },
  'gb-domestic': {
    name: 'UK Domestic',
    currencies: ['USD', 'GBP'],
    amazenEnabled: true,
    packagingEnabled: true
  },
  'gb-international': {
    name: 'UK International',
    currencies: ['USD', 'GBP'],
    amazenEnabled: true,
    packagingEnabled: true
  },
  'pl-domestic': {
    name: 'Poland Domestic',
    currencies: ['USD', 'EUR'],
    amazenEnabled: false,
    packagingEnabled: false
  },
  'pl-international': {
    name: 'Poland International',
    currencies: ['USD', 'EUR'],
    amazenEnabled: false,
    packagingEnabled: false
  }
};