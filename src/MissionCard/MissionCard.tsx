interface IMissionCard {
  name: string,
  year: string,
  country: string,
  destination: string,
}

export function MissionCard({ name, year, country, destination }: IMissionCard) {
  return (
    <div className="w-[300px] bg-blue-500">
      <p>{name}</p>
      <p>{year}</p>
      <p>{country}</p>
      <p>{destination}</p>
    </div>
  );
}