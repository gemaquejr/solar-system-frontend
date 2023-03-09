import React from 'react';
import Title from './title';
import planets from '../data/planets';
import PlanetCard from './planetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div className="solar-system" data-testid="solar-system" />
        <Title headline="Planetas" />
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </>
    );
  }
}

export default SolarSystem;