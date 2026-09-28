export default function StubPage({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <main className="page-main">
      <section className="subpage" data-nav-theme="dark">
        <h1>{title}</h1>
        <p className="t-body">{body}</p>
      </section>
    </main>
  );
}
