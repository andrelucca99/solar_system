interface InfoMissionProps {
  name: string;
}

export function InfoMission({ name }: InfoMissionProps) {
  return (
    <section className="w-full flex items-center justify-around">
      <div className="w-full h-[300px] bg-red-500"><p>{name}</p></div>
      <div className="w-full h-[300px] bg-yellow-300">dados do planeta</div>
    </section>
  )
}