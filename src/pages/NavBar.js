import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default () => {
  return (
    <div>
      <Link to="/">
        <Button icon="home"></Button>
      </Link>
    </div>
  );
};
