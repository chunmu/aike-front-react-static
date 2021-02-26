import React, { useEffect } from 'react';
import { RouterProps, useHistory } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL

const Main: React.FC<RouterProps> = (props: RouterProps) => {
  const router = useHistory();
  useEffect(() => {
    if (router) {
      router.push(`${BASE_URL}/main`)
    }
  }, [router])
  return (
    <div>
    </div>
  );
}

export default Main;
