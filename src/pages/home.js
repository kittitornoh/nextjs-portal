import { connect } from "react-redux";
import MainLayout from "../components/MainLayout";
import { checkServerSideCookie } from "../stores/auth/authActions";

const Home = ({ user }) => (
  <MainLayout>
    <h2>Who am i</h2>
    {JSON.stringify(user)}
  </MainLayout>
);

Home.getInitialProps = async ctx => {
  checkServerSideCookie(ctx);

  const token = ctx.store.getState().auth.token;
  if (token) {
    return {
      user: "Ryan"
    };
  }
};

export default connect(state => state)(Home);
