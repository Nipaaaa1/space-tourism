type CrewExplanationProps = {
  crewRank: string;
  crewName: string;
  crewDescription: string;
};

export const CrewExplanation = ({
  crewRank,
  crewName,
  crewDescription,
}: CrewExplanationProps) => {
  return (
    <div className="flex flex-col gap-6 text-center">
      <div className="space-y-2">
        <span className="heading-s text-white/50">{crewRank}</span>
        <h2 className="heading-m">{crewName}</h2>
      </div>
      <p className="body min-h-[168px] text-light-blue">{crewDescription}</p>
    </div>
  );
};
