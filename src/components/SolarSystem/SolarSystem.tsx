import { Title } from "../Title/Title";
import { Planets } from "../../data/planets";
import { PlanetCard } from "../PlanetCard/PlanetCard";

export function SolarSystem() {
  return (
    <>
      <Title headline="Planetas" />
      <section className="flex gap-1">
        {Planets && Planets.map(({ name, image }) => (
          <PlanetCard key={name} planetName={name} planetImage={image} />
        ))}
      </section>
    </>
  )
};