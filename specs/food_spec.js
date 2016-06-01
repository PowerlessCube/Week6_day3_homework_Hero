var Food = require( "../food" );
var assert = require( 'chai' ).assert;

describe('Food Object', function() {

  var apple = new Food( "apple", 10 );

  it('Food should have name', function() {
    assert.equal( "apple", apple.name );
  });

});
