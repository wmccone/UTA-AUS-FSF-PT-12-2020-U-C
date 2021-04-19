const Driver = require('./Driver');
const License = require('./License');
const Car = require('./Car');

Traveller.hasMany(Trips, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});


Trips.belongsToMany(Traveller, {
  foreignKey: 'traveller_id',
});

Location.hasMany(Trips, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});


Trips.belongsToMany(Location, {
  foreignKey: 'location_id',
});

module.exports = { Driver, License, Car };
