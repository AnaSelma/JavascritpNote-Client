import React, { Fragment } from 'react';
import "./App.scss";
import { Notification, Section } from 'rbx';

const App = () => (
  <Fragment>
    <Section>
      <Notification color="success">
        Javascrit Notes!
      </Notification>
    </Section>
  </Fragment>
)

export default App;
