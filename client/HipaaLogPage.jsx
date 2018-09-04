import { CardText, CardTitle } from 'material-ui/Card';
import { GlassCard, VerticalCanvas, Glass } from 'meteor/clinical:glass-ui';

import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import React  from 'react';
import { ReactMeteorData } from 'meteor/react-meteor-data';
import ReactMixin  from 'react-mixin';

import { AuditEventsTable } from 'meteor/clinical:hl7-resource-audit-event';

export class HipaaLogPage extends React.Component {
  getMeteorData() {
    let data = {
      style: {
        opacity: Session.get('globalOpacity')
      }
    };

    data.style = Glass.blur(data.style);
    data.style.appbar = Glass.darkroom(data.style.appbar);
    data.style.tab = Glass.darkroom(data.style.tab);

    return data;
  }

  render() {
    if(process.env.NODE_ENV === "test") console.log('In HipaaLogPage render');
    return (
      <div id='conditionsPage'>
        <VerticalCanvas>
          <GlassCard height='auto'>
            <CardTitle title='HIPAA - Audit Events' />
            <CardText>
              <AuditEventsTable />
            </CardText>
          </GlassCard>
        </VerticalCanvas>
      </div>
    );
  }
}

ReactMixin(HipaaLogPage.prototype, ReactMeteorData);

export default HipaaLogPage;
