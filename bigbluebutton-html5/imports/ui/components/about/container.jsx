import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import AboutComponent from './component';

const AboutContainer = (props) => {
  const { children } = props;
  return (
    <AboutComponent {...props}>
      {children}
    </AboutComponent>
  );
};

const getClientBuildInfo = () => (
  {
    settings: window.meetingClientSettings.public.app,

  }
);

export default withTracker(() => getClientBuildInfo())(AboutContainer);
