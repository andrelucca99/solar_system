import { Planets } from "../data/planets"

interface InfoMissionProps {
  name: string | undefined;
  image: string;
}

export function InfoMission({ name, image }: InfoMissionProps) {
  const planetInfo = Planets.find((planet) => planet.name == name)?.infos;

  return (
    <section className="flex w-full">
      <div className="w-1/2 bg-center flex justify-center items-center">
        <img src={image} alt={name} />
      </div>
      <div className="w-1/2 h-[500px] p-5 flex flex-col justify-baseline items-start rounded-lg border-2 border-blue-500 shadow-lg">
        <h2 className="text-white font-bold">
          {name}
        </h2>
        {planetInfo ? (
          <>
            <div className="grid grid-cols-2 p-5">
              <p>Diâmetro: {planetInfo.diameter}</p>
              <p>Distância do Sol: {planetInfo.distanceFromSun}</p>
              <p>Período orbital: {planetInfo.orbitalPeriod}</p>
              <p>Temperatura: {planetInfo.temperature}</p>
            </div>
            <p className="w-4/5">
              {planetInfo.description}
            </p>
            <div className="bg-blue-200">
              <h3>Curiosidades</h3>
              <ul>
                {planetInfo.curiosities.map((curiosity, index) => (
                  <li key={index}>{curiosity}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p>Informações não disponíveis.</p>
        )}
      </div>
    </section>
  )
}