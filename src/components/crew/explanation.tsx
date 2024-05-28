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
    <div className="flex flex-col gap-6 pt-10 text-center xl:flex-1 xl:justify-center xl:text-left">
      <div className="space-y-2 xl:space-y-4">
        <span className="heading-s text-white/50">{crewRank}</span>
        <h2 className="heading-m">{crewName}</h2>
      </div>
      <p className="body min-h-[168px] text-light-blue md:min-h-[117px] xl:min-h-0">
        {crewDescription}
      </p>
    </div>
  );
};
