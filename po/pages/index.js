const LoginPage = require('./login.page');
const AdderPage = require('./adder.page');
const SecurePage = require('./secure.page');
const CheckboxesPage = require('./checkboxes.page');
const DropdownPage = require('./dropdown.page');
const DynamicControlsPage = require('./dynamic-controls.page');
const AlertsPage = require('./alerts.page');
const UploadPage = require('./upload.page');

const pageInstances = {
    login: new LoginPage(),
    adder: new AdderPage(),
    secure: new SecurePage()
    ,checkboxes: new CheckboxesPage()
    ,dropdown: new DropdownPage()
    ,dynamiccontrols: new DynamicControlsPage()
    ,alerts: new AlertsPage()
    ,upload: new UploadPage()
};

function pages(name) {
    const page = pageInstances[name.toLowerCase()];

    if (!page) {
        throw new Error(`Unknown page: ${name}`);
    }

    return page;
}

module.exports = {
    LoginPage,
    AdderPage,
    SecurePage,
    CheckboxesPage,
    DropdownPage,
    DynamicControlsPage,
    AlertsPage,
    UploadPage,
    pages
};
