import { Button } from 'antd';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Status: {error.statusText || error.message}</p>
      <Link to={'/'}>
        <Button>🏠 Return Home</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
