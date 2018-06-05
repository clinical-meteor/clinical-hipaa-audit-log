

import HipaaLogPage from './client/HipaaLogPage';

var DynamicRoutes = [{
  'name': 'HipaaLogPage',
  'path': '/hipaa-audit-log',
  'component': HipaaLogPage,
  'requireAuth': true
}];

var AdminSidebarElements = [{
  'primaryText': 'Hipaa Audit Log',
  'to': '/hipaa-audit-log',
  'href': '/hipaa-audit-log'
}];

export { 
  AdminSidebarElements, 
  DynamicRoutes, 

  HipaaLogPage
};


