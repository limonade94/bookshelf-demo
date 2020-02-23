import React from 'react';
import SettingsNav from './SettingsNav';
import { Route, Redirect, Switch } from 'react-router-dom';
import Basic from './Basic';
import About from './About';
import Photos from './Photos';
import Account from './Account';

const SettingsDashboard = () => {
  return (
    <section className="settings outer flex-container">
      <main>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basics' />
          <Route path='/settings/basic' component={Basic} />
          <Route path='/settings/about' component={About} />
          <Route path='/settings/photos' component={Photos} />
          <Route path='/settings/account' component={Account} />
        </Switch>
      </main>
      <aside>
        <SettingsNav />
      </aside>
    </section>
  )
}

export default SettingsDashboard
