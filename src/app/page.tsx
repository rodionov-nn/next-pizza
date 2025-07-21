import { Container, Filters, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-16">
        <h1 className="text-4xl font-extrabold">All pizzas</h1>
      </Container>
      <TopBar className="mb-16" />
      <Container>
        <div className="flex gap-32">
          <div className="w-1/6">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <h1>Pizzas</h1>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
