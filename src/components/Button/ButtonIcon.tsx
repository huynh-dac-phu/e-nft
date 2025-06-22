const ButtonIcon = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <button
      className="bg-neutral-secondary flex aspect-square w-8 cursor-pointer items-center justify-center rounded-lg text-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
