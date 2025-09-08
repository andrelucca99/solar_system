interface ITitleProps {
  headline: string;
}

export function Title({ headline }: ITitleProps) {
  return <h2 className="text-3xl text-blue-500">{headline}</h2>
};