function PageNotFound({ title, message }: { title: string; message: string }) {
  return (
    <main className='not-found'>
      <h1>{title}</h1>
      <p>{message}</p>
    </main>
  );
}

export default PageNotFound;
