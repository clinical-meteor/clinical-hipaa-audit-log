Package.describe({
  summary: "HIPAA audit log for ClinicalFramework.",
  version: "3.1.3",
  git: "http://github.com/clinical-meteor/hipaa-audit-log.git",
  name: "clinical:hipaa-audit-log"
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('mongo');
  api.use('ecmascript@0.9.0');

  api.use('aldeed:collection2@3.0.0');
  api.use('simple:json-routes@2.1.0');
  api.use('momentjs:moment@2.17.1');

  api.use('session');
  api.use('http');
  api.use('react-meteor-data@0.2.15');

  api.use('mrt:moment@2.8.1', 'client');
  api.use('grove:less@0.1.1', 'client');

  // api.use('clinical:router@2.0.17');
  api.use('clinical:fonts@1.0.0', 'client');
  api.use('clinical:auto-resizing@0.1.0', 'client');
  api.use('clinical:hipaa-logger@2.0.4');
  api.use('clinical:glass-ui@2.2.4');

  api.use('clinical:extended-api@2.2.2');

  api.use('clinical:hl7-resource-datatypes@4.0.0');
  api.use('clinical:hl7-resource-bundle@1.4.0');
  api.use('clinical:hl7-resource-audit-event@1.6.5');

  api.imply('clinical:hipaa-logger@2.0.4');

  api.addFiles('lib/HipaaAuditLog.js');

  api.addFiles('server/initialize.js', "server");
  api.addFiles('server/publication.js', "server");

  // api.addFiles('components/hipaaRibbon/hipaaRibbon.html', "client");
  // api.addFiles('components/hipaaRibbon/hipaaRibbon.js', "client");
  // api.addFiles('components/hipaaRibbon/hipaaRibbon.less', "client");

  // api.addFiles('components/hipaaAuditLog/hipaaAuditLog.html', "client");
  // api.addFiles('components/hipaaAuditLog/hipaaAuditLog.js', "client");
  // api.addFiles('components/hipaaAuditLog/hipaaAuditLog.less', "client");

  // api.addFiles('components/hipaaLogPage/hipaaLogPage.html', "client");
  // api.addFiles('components/hipaaLogPage/hipaaLogPage.js', "client");
  // api.addFiles('components/hipaaLogPage/hipaaLogPage.less', "client");

  api.export('HipaaAuditLog');

  api.mainModule('index.jsx', 'client');
});


Npm.depends({
  "simpl-schema": "1.5.3"
})