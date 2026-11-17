/* Burnpur SAIL — Consolidated EPC Schedule: deployment settings.
   apiUrl: the "HTTP POST URL" of the Power Automate flow "Burnpur Schedule API"
   (see docs/SETUP.md). Leave it empty and the sign-in page says it isn't configured. */
window.BURNPUR_CONFIG = {
  apiUrl: 'https://default000090a2d8654861ba6937e8e47451.72.environment.api.powerplatform.com:443/powerautomate/automations/direct/cu/23/workflows/5aca34c96dbf43fbb649bde4276cc3c5/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=j55zC7L88vcJ14fkkwkF0OPlfMOTW5o7y_zMYo0MSQs',
  appTitle: 'Burnpur SAIL — Consolidated EPC Schedule',
  orgName: 'Prostarm Info Systems Ltd',          // optional, shown under the title, e.g. 'Prostarm Info Systems Ltd'
  syncSeconds: 120      // how often to pick up other users' changes
};
