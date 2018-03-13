// Code your solution here:
function driversWithRevenueOver(drivers, string){
  return drivers.filter (function (driver) {return driver.revenue > string});
}

function driverNamesWithRevenueOver(drivers, string){
  let selectedDrivers = driversWithRevenueOver(drivers, string);
  return selectedDrivers.map(function (driver) {return driver.name});
}

function exactMatch(drivers, attrs){
  console.log(drivers[0])
  for (const prop in attrs){
    return drivers.filter (function (driver)  { return driver[prop] == attrs[prop] } ) ;
  }
}

function exactMatchToList(drivers, attrs){

  let selectedDrivers = exactMatch(drivers, attrs)
  return selectedDrivers.map(function(driver) {return driver.name});
}
