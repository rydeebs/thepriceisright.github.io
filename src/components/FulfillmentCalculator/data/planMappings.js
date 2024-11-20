```javascript
export const planMappings = {
  'us-domestic': {
    'no-amazon': {
      'inclusive': {
        'MIN-1': { 
          id: '2601', 
          url: 'https://shipbob.seismic.com/Link/Content/DC7Rd7mHQB99H8QVR8fCQV8RPJRd',
          margin: '0.00%'
        },
        'MIN-2': { 
          id: '2602',
          url: 'https://shipbob.seismic.com/Link/Content/DCm4CMDHmT4Mm89FgQdWDBWTjGGd',
          margin: '2.00%'
        },
        'MIN-3': { 
          id: '2603',
          url: 'https://shipbob.seismic.com/Link/Content/DCgb4BH23cD3FGqMW6Qf7g67hR8j',
          margin: '4.00%'
        },
        'MidMarket-1': {
          id: '2604',
          url: 'https://shipbob.seismic.com/Link/Content/DCCWmcPQPQb3HGmGVcpJjBdbTQQd',
          margin: '6.00%'
        },
        // ... continue with all US Domestic inclusive plans
      },
      'exclusive': {
        'MIN-1': {
          id: '2616',
          url: 'https://shipbob.seismic.com/Link/Content/DCPGdpdgFgRGDGhHDF6fjPqqJfmB',
          margin: '0.00%'
        },
        // ... continue with all US Domestic exclusive plans
      }
    },
    'amazon': {
      'inclusive': {
        'MIN-1': {
          id: '2631',
          url: 'https://shipbob.seismic.com/Link/Content/DCJFQCbhjf3RhG2GpgXb64p6hpc3',
          margin: '0.00%'
        },
        // ... continue with all US Domestic Amazon inclusive plans
      }
    }
  },

  // Continue with other regions...
};