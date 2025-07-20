import { Container, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-16">
        <h1 className="text-4xl font-extrabold">Все пиццы</h1>
      </Container>
      <TopBar />
    </>
  );
}
