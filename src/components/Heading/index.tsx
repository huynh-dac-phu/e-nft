const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-yellow font-barlow text-2xl leading-8 font-[900] uppercase italic">
      {children}
    </h3>
  );
};

export default Heading;
