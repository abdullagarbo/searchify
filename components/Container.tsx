const container: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
};

function Container({ children }: { children: React.ReactNode }) {
  return <div style={container}>{children}</div>;
}

export default Container;
