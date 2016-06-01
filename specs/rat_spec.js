var Rat = require( '../rat' );
var Food = require( '../food' );
var assert = require( 'chai' ).assert;

describe('Rat "Alive" Object', function() {

  beforeEach( function() {
    bigRat = new Rat( "Big Rat", 20, 5 );
    coconut = new Food( "Coconut", 12 );
  });

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
    assert.deepEqual( [], bigRat.lootTable );
  });

  it('Should replace healthValue with rats poisonValue', function() {
    bigRat.poison(coconut);
    assert.equal( 20, coconut.healthValue );
  });

  it('Should have an empty loot table while alive', function() {
    bigRat.populateLootTable(coconut);
    assert.deepEqual( [], bigRat.lootTable );
  });

});

describe('Rat "dead" Object', function() {

  beforeEach( function() {
    deadRat = new Rat( "Expired Rat", 0, 0 );
    coconut = new Food( "Coconut", 12 );
  });

  it('Health should be Zero', function() {
    assert.equal( 0, deadRat.health );
  });

  it('Should "push" an item to it\'s lootTable on death', function() {
    deadRat.populateLootTable(coconut);
    assert.deepEqual( [ coconut ], deadRat.lootTable );
  });


});
