import { Title } from "../Title/Title";
import { Planets } from "../../data/planets";
import { PlanetCard } from "../PlanetCard/PlanetCard";
import { useState } from "react";
import { InfoMission } from "../../InfoMission/InfoMission";

export function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  const handlePlanetClick = (planetName: string) => {
    setSelectedPlanet(planetName);
  }

  return (
    <>
      <Title headline="Planetas" />
      <section className="flex gap-1">
        {Planets && Planets.map(({ name, image }) => (
          <PlanetCard
            key={name}
            planetName={name}
            planetImage={image}
            onPlanetClick={handlePlanetClick}
          />
        ))}
      </section>
      <section className="w-full h-[600px]">
        {selectedPlanet && (
          <>
            <InfoMission
              name={selectedPlanet}
              image={Planets.find((planet) => planet.name === selectedPlanet)?.image || ""}
            />
            <p>missions</p>
          </>
        )}
      </section>
    </>
  )
};