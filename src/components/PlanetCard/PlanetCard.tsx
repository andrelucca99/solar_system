interface IPlanetCard {
  planetName: string,
  planetImage: string,
}

export function PlanetCard({ planetImage, planetName }: IPlanetCard) {
  return (
    <article className="w-[300px] h-[100px] bg-amber-400 flex flex-col items-center justify-center p-1">
      <img
        className="w-[100px]"
        src={planetImage}
        alt={`Planeta ${planetName}`}
      />
      <p>{planetName}</p>
    </article>
  );
};
