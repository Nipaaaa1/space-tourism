type PageTitleProps = {
  pageIndex: string;
  pageTitle: string;
};

export const PageTitle = ({ pageIndex, pageTitle }: PageTitleProps) => {
  return (
    <h1 className="heading-xs flex justify-center gap-6 md:justify-start md:self-start">
      <span className="font-bold text-white/25">{pageIndex}</span>
      {pageTitle}
    </h1>
  );
};
