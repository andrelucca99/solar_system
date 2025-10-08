interface IPlanetCard {
  planetName: string,
  planetImage: string,
  onPlanetClick: (planetName: string) => void;
}

export function PlanetCard({ planetImage, planetName, onPlanetClick }: IPlanetCard) {
  return (
    <article className="w-[300px] h-[100px] flex flex-col items-center justify-center p-1">
      <img
        className="w-[100px] cursor-pointer"
        src={planetImage}
        alt={`Planeta ${planetName}`}
        onClick={() => onPlanetClick(planetName)}
      />
      <p>{planetName}</p>
    </article>
  );
};
