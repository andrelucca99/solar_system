interface IPlanetCard {
  planetName: string,
  planetImage: string,
}

export function PlanetCard({ planetImage, planetName }: IPlanetCard) {
  return (
    <>
      <p> {planetName}</p>
      <img src={planetImage} alt={`Planeta ${planetName}`} />
    </>
  );
};