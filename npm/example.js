var DRA = require ('dra-dual-reference-array');

var
  fields = [ // Our array
    {
      id : 0,
      fieldName : 'email', // It's a common property, with unique values
      label : 'Email',
      data : { dummy : 'whoomy' }
    },
    {
      id : 1,
      fieldName : 'another', // Again
      label : 'Another field'
    }
  ]
;

// At this time, I just can access the array, through the index
console.log ( fields[0] ); // Object {...}

// Now, the magic
fields = DRA ( fields , 'fieldName' );

// Then, the same array's value is available by it's common property unique name
console.log ( fields._email ); // Object {...}

// If some property is changed, the change is reflected in both ways
fields._email.label = 'Devs are disciples of Thomas the Apostle';
console.log ( fields._email.label , fields[0].label );
// 'Devs are disciples of Thomas the Apostle' , 'Devs are disciples of Thomas the Apostle'

// The versa is the same, the ARRAY's REFERENCE can be accessed in DUAL ways
fields[0].label = 'We need to see to believe, show me the code';
console.log ( fields._email.label , fields[0].label );
// 'We need to see to believe, show me the code' , 'We need to see to believe, show me the code'

// And the object comparison remains
fields[0] === fields._email // True

// BONUS: it keeps the array's length untouched
fields.length // 2

// BONUS: You can use the explicit method to achieve the same result and improve readability
// Suggestion by Raul Oliver
DRA.convertPropsToObject ( fields , 'fieldName' );