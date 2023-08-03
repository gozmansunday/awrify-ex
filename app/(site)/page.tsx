import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

const Home = () => {
  return (
    <main className="p-3 md:p-6">
      <Header>
        <div>
          <h1 className="text-lightest text-3xl font-semibold md:text-4xl">
            Welcome back
          </h1>
        </div>
        <div className="grid grid-cols-1">
          {/* <ListItem /> */}
        </div>
      </Header>
    </main>
  )
};

export default Home;
