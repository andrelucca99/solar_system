import { Planets } from "../data/planets"

interface InfoMissionProps {
  name: string | undefined;
  image: string;
}

export function InfoMission({ name, image }: InfoMissionProps) {
  const planetInfo = Planets.find((planet) => planet.name == name)?.infos;

  return (
    <section className="flex w-full bg-blue-600">
      <div className="w-1/2 bg-white bg-center flex justify-center items-center">
        <img src={image} alt={name} />
      </div>
      <div className="w-1/2 h-[500px] bg-black flex flex-col items-start">
        <h2>{name}</h2>
        {planetInfo ? (
          <>
            <div>
              <p>Diâmetro: {planetInfo.diameter}</p>
              <p>Distância do Sol: {planetInfo.distanceFromSun}</p>
              <p>Período orbital: {planetInfo.orbitalPeriod}</p>
              <p>Temperatura: {planetInfo.temperature}</p>
            </div>
            <p>{planetInfo.description}</p>
            <div>
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