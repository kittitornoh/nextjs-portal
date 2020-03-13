import { connect } from "react-redux";
import MainLayout from "../components/MainLayout";

const Test = ({ user }) => (
  <MainLayout>
    <h2>Who am i</h2>
    {JSON.stringify(user)}
  </MainLayout>
);

Test.getInitialProps = async ctx => {
  const token = ctx.store.getState().auth.token;
  console.log(token);
  if (token) {
    return {
      user: "Ryan"
    };
  }
};

export default connect(state => state)(Test);
