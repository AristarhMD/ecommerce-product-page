import Slider from "./reusable/Slider";
import Content from "./reusable/Content";

export function MainContent() {
  return (
    <main>
      <section className="mx-auto flex flex-col xl:flex-row items-center xl:gap-32 xl:w-[91.98%] ">
        <Slider />
        <Content />
      </section>
    </main>
  );
}
