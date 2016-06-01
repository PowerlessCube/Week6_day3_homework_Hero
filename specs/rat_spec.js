var Rat = require( '../rat' );
var Food = require( '../food' );
var assert = require( 'chai' ).assert;

describe('Rat', function() {

  var bigRat = new Rat( "Big Rat", 20, 5 );
  var coconut = new Food( "Coconut", 12 );

  it('Should have a name', function() {
    assert.equal( "Big Rat", bigRat.name );
  });

  it('Should have poisonValue', function() {
    assert.equal( 20, bigRat.poisonValue );
  });

  it('Should have health', function() {
    assert.equal( 5, bigRat.health );
  });

  it('Should have a loot table', function() {
    assert.deepEqual( [],bigRat.loot );
  });

  it('Should replace healthValue with rats poisonValue', function() {
    bigRat.poison(coconut);
    assert.equal( 20, coconut.healthValue );
  });

});
