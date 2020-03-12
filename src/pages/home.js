import { connect } from "react-redux";
import MainLayout from "../components/MainLayout";
import { reauthenticate } from "../stores/auth/authActions";
import { getCookie } from "../_helpers/cookie";

const Home = ({ data }) => {
  console.log(data);
  return (
    <MainLayout>
      <h2>Who am i</h2>
      {data}
    </MainLayout>
  );
};

export const getServerSideProps = async ctx => {
  const login = "/login?redirect=true";

  if (ctx.req.headers.cookie) {
    const token = getCookie("token", ctx.req);
    // redirect if there is no cookie
    if (!token) {
      ctx.res.writeHead(302, {
        Location: login
      });
      ctx.res.end();
    } else {
      //ctx.store.dispatch(authActions.reauthenticate(token));
      reauthenticate(token);
    }
  }

  const data = { user: "john" };
  console.log(data);

  return {
    props: { data }
  };
};

// Home.getInitialProps = async ctx => {
//   initialize(ctx);

//   const token = ctx.store.getState().auth.token;
//   if (token) {
//     return {
//       user: "John"
//     };
//   }
// };

export default connect(state => state, { reauthenticate })(Home);
