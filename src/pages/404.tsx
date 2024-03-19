import { Link } from 'react-router-dom';

function NotFound(): JSX.Element{
  return(
    <div className="NotFound" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>
                    404.
          <br />
          <small>Page not found.</small>
        </h1>
        <Link to="/" style={{ textDecoration: 'underline' }}>Вернуться на главную.</Link>
      </div>
    </div>
  );
}

export default NotFound;
