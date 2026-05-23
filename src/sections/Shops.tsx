import Card from "../components/Card";

const Shops = () => {
  return (
    <section className=" mx-auto w-full py-6 px-6 flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl font-cairo py-6 text-red-700">Shop</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto place-items-center">
            <Card img="/shoes1.jpg" title="" price="" />
            <Card img="/shoes2.jpg" title="" price="" />
            <Card img="/shoes3.jpg" title="" price="" />
            <Card img="/shoes4.jpg" title="" price="" />
            <Card img="/shoes5.jpg" title="" price="" />
            <Card img="/shoes6.jpg" title="" price="" />

        </div>

    </section>
    );
}
export default Shops;