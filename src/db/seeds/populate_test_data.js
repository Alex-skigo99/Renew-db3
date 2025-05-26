"use strict";
require('ts-node').register();
const db = require('../../db');
const DatabaseTableConstants = require('../DatabaseTableConstants');

const { v4: uuidv4 } = require('uuid');
const org_1_Id = uuidv4();
const org_2_id = uuidv4();
const user_1_id = uuidv4();
const user_2_id = uuidv4();
const googleCredentials1Id = uuidv4();
const googleCredentials2Id = uuidv4();
const gmbLocation1Id = uuidv4();
const gmbLocation2Id = uuidv4();
const gmbLocation3Id = uuidv4();
const gmbLocation4Id = uuidv4();
const gmbReview1Id = uuidv4();
const gmbReview2Id = uuidv4();
const gmbReview3Id = uuidv4();
const gmbReview4Id = uuidv4();

exports.seed = async function(knex) {
  // Delete in proper order to respect foreign key constraints
  await db(DatabaseTableConstants.REINSTATEMENT_WIZARD_SUBMISSION_DOCUMENT_TABLE).del();
  await db(DatabaseTableConstants.REINSTATEMENT_WIZARD_SUBMISSION_TABLE).del();
  await db(DatabaseTableConstants.GMB_REVIEW_TABLE).del();
  await db(DatabaseTableConstants.GMB_LOCATION_DOCUMENT_TABLE).del();
  await db(DatabaseTableConstants.GMB_LOCATION_ORGANIZATION_BRIDGE_TABLE).del();
  await db(DatabaseTableConstants.GMB_LOCATION_TABLE).del();
  await db(DatabaseTableConstants.GOOGLE_CREDENTIALS_TABLE).del();
  await db(DatabaseTableConstants.USER_TABLE).del();
  await db(DatabaseTableConstants.ORGANIZATION_TABLE).del();
  // Inserts seed entries with full data
  await db(DatabaseTableConstants.ORGANIZATION_TABLE).insert([
    { id: org_1_Id, name: 'Test Organization 1' },
    { id: org_2_id, name: 'Test Organization 2' },
  ]);
  await db(DatabaseTableConstants.USER_TABLE).insert([
    { id: user_1_id, name: 'Test User 1', email: 'user1@example.com', organization_id: org_1_Id },
    { id: user_2_id, name: 'Test User 2', email: 'user2@example.com', organization_id: org_2_id },
  ]);
  await db(DatabaseTableConstants.GOOGLE_CREDENTIALS_TABLE).insert([
    { id: googleCredentials1Id, user_id: user_1_id, organization_id: org_1_Id, google_refresh_token: 'refresh1', sub: 'sub1', google_access_token: 'access_token1', google_access_token_expiry_date: Date.now() + 3600 * 1000, google_email: 'user1@google.com', is_google_refresh_token_valid: true },
    { id: googleCredentials2Id, user_id: user_1_id, organization_id: org_1_Id, google_refresh_token: 'refresh2', sub: 'sub2', google_access_token: 'access_token2', google_access_token_expiry_date: Date.now() + 3600 * 1000, google_email: 'user2@google.com', is_google_refresh_token_valid: true },
  ]);
  await db(DatabaseTableConstants.GMB_LOCATION_TABLE).insert([
    { id: gmbLocation1Id, business_name: 'Business 1', region_code: 'US' },
    { id: gmbLocation2Id, business_name: 'Business 2', region_code: 'CA' },
    { id: gmbLocation3Id, business_name: 'Business 3', region_code: 'UK' },
    { id: gmbLocation4Id, business_name: 'Business 4', region_code: 'AU' },
  ]);
    await db(DatabaseTableConstants.GMB_LOCATION_ORGANIZATION_BRIDGE_TABLE).insert([
        { organization_id: org_1_Id, gmb_id: gmbLocation1Id, account_id: 'sub1' },
        { organization_id: org_1_Id, gmb_id: gmbLocation2Id, account_id: 'sub2' },
        { organization_id: org_1_Id, gmb_id: gmbLocation3Id, account_id: 'sub1' },
        { organization_id: org_1_Id, gmb_id: gmbLocation4Id, account_id: 'sub1' },
    ]);
  await db(DatabaseTableConstants.GMB_REVIEW_TABLE).insert([
    { id: gmbReview1Id, gmb_id: gmbLocation1Id, reviewReplyComment: 'Great service! ', starRating: 5 },
    { id: gmbReview2Id, gmb_id: gmbLocation1Id, reviewReplyComment: 'Good service!', starRating: 2 },
    { id: gmbReview3Id, gmb_id: gmbLocation1Id, reviewReplyComment: 'Excellent service!', starRating: 5 },
    { id: gmbReview4Id, gmb_id: gmbLocation2Id, reviewReplyComment: 'Good experience.', starRating: 4 },
  ]);
//   await db(DatabaseTableConstants.REINSTATEMENT_WIZARD_SUBMISSION_TABLE).insert([
//     { id: '1', organization_id: org_1_Id },
//     { id: '2', organization_id: org_2_id },
//   ]);
//   await db(DatabaseTableConstants.REINSTATEMENT_WIZARD_SUBMISSION_DOCUMENT_TABLE).insert([
//     { id: gmbLocationDocument1Id, submission_id: '1', document_name: 'Document 1', uploaded_at: new Date() },
//     { id: gmbLocationDocument2Id, submission_id: '2', document_name: 'Document 2', uploaded_at: new Date() },
//   ]);

  await db(DatabaseTableConstants.NOTIFICATION_TABLE).insert([
    { id: uuidv4(), organization_id: org_1_Id, user_id: user_1_id, notification_text: 'New review received', data: { reviewId: gmbReview1Id }, read: false },
    { id: uuidv4(), organization_id: org_1_Id, user_id: user_1_id, notification_text: 'New review received', data: { reviewId: gmbReview2Id }, read: false },
    { id: uuidv4(), organization_id: org_1_Id, user_id: user_1_id, notification_text: 'New review received', data: { reviewId: gmbReview3Id }, read: false },
    { id: uuidv4(), organization_id: org_2_id, user_id: user_2_id, notification_text: 'New review received', data: { reviewId: gmbReview4Id }, read: false },
    { id: uuidv4(), organization_id: org_1_Id, user_id: user_1_id, notification_text: 'Location updated', data: { locationId: gmbLocation1Id }, read: false },
    { id: uuidv4(), organization_id: org_1_Id, user_id: user_1_id, notification_text: 'Location updated', data: { locationId: gmbLocation2Id }, read: false },
    { id: uuidv4(), organization_id: org_2_id, user_id: user_2_id, notification_text: 'Location updated', data: { locationId: gmbLocation2Id }, read: false },
  ]);
};
