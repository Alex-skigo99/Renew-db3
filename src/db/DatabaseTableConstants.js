class DatabaseTableConstants {
    static get REINSTATEMENT_WIZARD_SUBMISSION_DOCUMENT_TABLE()  { return "reinstatement_wizard_submission_document"; }

    static get USER_TABLE() { return "app_user"; }

    static get GOOGLE_CREDENTIALS_TABLE() { return "google_credentials" }

    static get GMB_LOCATION_TABLE() { return "gmb_location"; }

    static get GMB_LOCATION_ORGANIZATION_BRIDGE_TABLE() { return "xref_gmb_location_organization"; }

    static get ORGANIZATION_TABLE() { return "organization"; }

    static get GMB_REVIEW_TABLE() { return "gmb_review"; }

    static get GMB_LOCATION_DOCUMENT_TABLE() { return "gmb_location_document"; }

    static get REINSTATEMENT_WIZARD_SUBMISSION_TABLE() { return "reinstatement_wizard_submission"; }

    static get HISTORY_TABLE() { return "history"; }

    static get NOTIFICATION_TABLE() { return "notification"; }
}

module.exports = DatabaseTableConstants;
