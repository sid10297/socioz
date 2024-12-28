import Header from "./Header";

export const ProtectedLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
