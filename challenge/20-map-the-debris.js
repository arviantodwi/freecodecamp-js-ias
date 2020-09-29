// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
// https://en.wikipedia.org/wiki/Orbital_period#Small_body_orbiting_a_central_body

function calcOrbitalPeriod(avgAlt) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const orbit = 2 * Math.PI;
  const axis = Math.pow((earthRadius + avgAlt), 3);
  const masses = Math.sqrt(axis / GM);
  const period = Math.round(orbit * masses);

  return period;
}

function orbitalPeriod(arr) {
  const periods = arr.map(obj => {
    return {
      name: obj.name,
      orbitalPeriod: calcOrbitalPeriod(obj.avgAlt)
    }
  })
  return periods;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
