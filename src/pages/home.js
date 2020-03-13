import { withPrivate } from "../components/hoc/withPrivate";
import MainLayout from "../components/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <h2>Who am i</h2>
    </MainLayout>
  );
};

export default withPrivate(Home);
