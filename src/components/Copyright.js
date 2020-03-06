import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://inxitehealth.com/'>
        InXite Health Systems
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
