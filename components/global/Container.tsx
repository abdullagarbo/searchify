const page: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
};

function Container({ children }: { children: React.ReactNode }) {
  return <div style={page}>{children}</div>;
}

export default Container;
