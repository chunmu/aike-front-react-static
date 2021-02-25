import React, { useEffect } from 'react';
import { RouterProps, useHistory } from 'react-router-dom';

const Main: React.FC<RouterProps> = (props: RouterProps) => {
  const router = useHistory();
  useEffect(() => {
    if (router) {
      router.push('/aike-front-react-static/main')
    }
  }, [router])
  return (
    <div>
    </div>
  );
}

export default Main;
