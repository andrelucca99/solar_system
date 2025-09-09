import { Title } from "../components/Title/Title";
import { NumberMissions } from "../data/missions";
import { MissionCard } from "../MissionCard/MissionCard";

export function Missions() {
  console.log(NumberMissions)
  return (
    <section className="flex flex-col items-center py-5">
      <Title headline="Missões" />
      <div className="w-full grid grid-cols-4 gap-1 p-1 bg-red-500">
        {NumberMissions && NumberMissions.map(({ name, year, country, destination }) => (
          <MissionCard key={name} name={name} year={year} country={country} destination={destination} />
        ))}
      </div>
    </section>
  );
}
